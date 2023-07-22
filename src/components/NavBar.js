import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

// Extracted constants
const NAV_SECTIONS = ['home', 'skills', 'projects'];
const NAV_ICONS = [navIcon1, navIcon2, navIcon3];

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = (section) => {
    setActiveLink(section);
  };

  return (
    <Navbar expand='md' className={scrolled ? 'scrolled' : ''}>
      <Container>
        <Navbar.Brand as={HashLink} smooth to='/'>
          <img src={logo} alt='Logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            {NAV_SECTIONS.map((section) => (
              <Nav.Link
                as={HashLink}
                smooth
                to={`#${section}`}
                className={
                  activeLink === section ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => handleLinkClick(section)}
                key={section}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Nav.Link>
            ))}
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              {NAV_ICONS.map((icon, idx) => (
                <a href='#' key={idx}>
                  <img src={icon} alt={`Nav Icon ${idx + 1}`} />
                </a>
              ))}
            </div>
            <HashLink smooth to='#connect'>
              <button className='vvd'>
                <span>Let’s Connect</span>
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
