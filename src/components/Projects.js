import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import shredderImage from '../assets/img/shredder.png';
import SDCImage from '../assets/img/SDC.png';
import HFLAImage from '../assets/img/HFLA.png';
import HFLAImage2 from '../assets/img/HFLA2.png';
import fetchPupImage from '../assets/img/fetchpup.gif';
import spotProfileImage from '../assets/img/spotprofile.gif';
import hawkShopImage from '../assets/img/hawkshop.gif';
import sweetNibletImage from '../assets/img/sweetniblet.gif';

export const Projects = () => {
  const openSourceProjects = [
    {
      title: 'Hack For LA',
      description:
        'Volunteer for Website Team. Solved Github issues by developing FE features, fixing bugs & creating documentations',
      imgUrl: HFLAImage,
      techStack: 'Javascript - HTML - CSS - Docker - Jekyll - Figma',
      githubLink: 'https://github.com/hackforla/website',
      liveLink: 'https://www.hackforla.org/',
    },
    {
      title: 'Hack For LA',
      description:
        'Volunteer for Merge Team. Maintained Github codebase & create new issues. Onboard new devs. Perform code reviews & merge PRs',
      imgUrl: HFLAImage2,
      techStack: 'Github Pages - Github Action - Docker - Jekyll ',
      githubLink: 'https://github.com/hackforla',
      liveLink: 'https://www.hackforla.org/',
    },
  ];

  const projects = [
    {
      title: 'FetchPups',
      description:
        'Web app for shelterd dog database search with filters, personalized favorites & a match generator',
      imgUrl: fetchPupImage,
      techStack: 'React - Typescript - Tailwind - Node - PostgreSQL',
      githubLink: 'https://github.com/Skydodle/fetch-pups',
      liveLink: 'https://skydodle.github.io/fetch-pups/',
    },
    {
      title: 'Spotify Profile',
      description:
        'Web app for visualizing personalized Spotify profile utilizing the Spotify Web API and OAuth2.0',
      imgUrl: spotProfileImage,
      techStack: 'React - Styled Components - Node - Express',
      githubLink: 'https://github.com/Skydodle/spot-profile',
      liveLink: null,
    },
    {
      title: 'Hawk Shop',
      description:
        'E-Commerce web store for latest kicks and street wear, featuring favorite list for users, Q&A, and Reviews ',
      imgUrl: hawkShopImage,
      techStack: 'React - Styled Components - Node - REST',
      githubLink: 'https://github.com/Hawk-Shop/Katana',
      liveLink: null,
    },
    {
      title: 'Sweet Niblets',
      description:
        'Web app for karaoke with facial recognition avatar & audio recording, utilizing face-api, and Youtube API',
      imgUrl: sweetNibletImage,
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
                  <Nav.Link eventKey='first'>Applications</Nav.Link>
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
                <Tab.Pane eventKey='second'>
                  <Row className='justify-content-md-center'>
                    {openSourceProjects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
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
