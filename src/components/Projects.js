import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import shredderImage from '../assets/img/shredder.png';
import SDCImage from '../assets/img/SDC.png';

export const Projects = () => {
  const projects = [
    {
      title: 'FetchPups',
      description:
        'Web app for shelterd dog database search with filters, personalized favorites & a match generator',
      imgUrl: 'https://media.giphy.com/media/2sXHaogN0rtyuN1j4t/giphy.gif',
      techStack: 'React - Typescript - Tailwind - Node - PostgreSQL',
      githubLink: 'https://github.com/Skydodle/fetch-pups',
      liveLink: 'https://skydodle.github.io/fetch-pups/',
    },
    {
      title: 'Spotify Profile',
      description:
        'Web app for visualizing personalized Spotify profile utilizing the Spotify Web API and OAuth2.0',
      imgUrl: 'https://media.giphy.com/media/5PmikwWSPNTDNIR3J4/giphy.gif',
      techStack: 'React - Styled Components - Node - Express',
      githubLink: 'https://github.com/Skydodle/spot-profile',
      liveLink: null,
    },
    {
      title: 'Hawk Shop',
      description:
        'E-Commerce web store for latest kicks and street wear, featuring favorite list for users, Q&A, and Reviews ',
      imgUrl: 'https://media.giphy.com/media/vZhhLK5jwgb0s03Jzk/giphy.gif',
      techStack: 'React - Styled Components - Node - REST',
      githubLink: 'https://github.com/Hawk-Shop/Katana',
      liveLink: null,
    },
    {
      title: 'Sweet Niblets',
      description:
        'Web app for karaoke with facial recognition avatar & audio recording, utilizing face-api, and Youtube API',
      imgUrl: 'https://media.giphy.com/media/tJ4MNQs3B1M2J5YonR/giphy.gif',
      techStack: 'NextJS - Tailwind - Vercel - Cypress',
      githubLink: 'https://github.com/Kowalski-Group/rfp2204-blue-ocean',
      liveLink: null,
    },
    {
      title: 'Shredder Hub',
      description:
        'Clone of snowboard web store using web scrapper for building MongoDB Atlas database & NextJS frontend',
      imgUrl: shredderImage,
      techStack: 'NextJS - CSS3 - Node - MongoDB Atlas',
      githubLink: 'https://github.com/Skydodle/Shredder-Hub',
      liveLink: null,
    },
    {
      title: 'System Design',
      description:
        'Optimized & deployed with database, API, proxy & host servers built to support an existing frontend with scalability',
      imgUrl: SDCImage,
      techStack: 'Node - Express - PostgreSQL - AWS EC2 - NGINX',
      githubLink: 'https://github.com/SDC-GoldEngine',
      liveLink: null,
    },
  ];
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Some of my recent work showcasing my skills in Full Stack
              Development, as well as Open Source contributions. Each project
              demonstrates my ability to handle diverse aspects of web
              development.
            </p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav
                variant='pills'
                className='nav-pills mb-5 justify-content-center align-items-center'
                id='pills-tab'
              >
                <Nav.Item>
                  <Nav.Link eventKey='first'>Full Stack</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Open Source</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>Lorum Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-right'
        alt='bg right'
        src={colorSharp2}
      />
    </section>
  );
};
