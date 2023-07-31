import { useState, useEffect } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import linkedinIcon from '../assets/img/nav-icon1.svg';
import githubIcon from '../assets/img/nav-icon2.svg';
import instagramIcon from '../assets/img/nav-icon3.svg';

const NAV_SECTIONS = ['home', 'skills', 'projects'];
const SOCIAL_LINKS = [
  { url: 'https://www.linkedin.com/in/johnnyhcwu/', icon: linkedinIcon },
  { url: 'https://github.com/Skydodle', icon: githubIcon },
  { url: 'https://www.instagram.com/skydodle/', icon: instagramIcon },
];

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
          <span className='logo'>JW</span>
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
              {SOCIAL_LINKS.map((link, idx) => (
                <a href={link.url} target='_blank' rel='noreferrer' key={idx}>
                  <img src={link.icon} alt={`Social Icon ${idx + 1}`} />
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
