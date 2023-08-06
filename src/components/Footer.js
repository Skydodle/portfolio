import { Container, Row, Col } from 'react-bootstrap';
import linkedinIcon from '../assets/img/nav-icon1.svg';
import githubIcon from '../assets/img/nav-icon2.svg';
import instagramIcon from '../assets/img/nav-icon3.svg';
import { DownloadResume } from './Resume';

const SOCIAL_LINKS = [
  { url: 'https://www.linkedin.com/in/johnnyhcwu/', icon: linkedinIcon },
  { url: 'https://github.com/Skydodle', icon: githubIcon },
  { url: 'https://www.instagram.com/skydodle/', icon: instagramIcon },
];

export const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Row className='align-items-center'>
          <DownloadResume />
          <Col size={12} sm={6}>
            <span className='logo'>JW</span>
          </Col>
          <Col size={12} sm={6} className='text-center text-sm-end'>
            <div className='social-icon'>
              {SOCIAL_LINKS.map((link, idx) => (
                <a href={link.url} target='_blank' rel='noreferrer' key={idx}>
                  <img src={link.icon} alt={`Social Icon ${idx + 1}`} />
                </a>
              ))}
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
