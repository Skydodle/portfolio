import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';

export const Projects = () => {
  const projects = [
    {
      title: 'FetchPups',
      description: 'Web app for shelterd dog database search',
      imgUrl: 'https://media.giphy.com/media/2sXHaogN0rtyuN1j4t/giphy.gif',
    },
    {
      title: 'Spotify Profile',
      description: 'Web app for visualizing personalized Spotify profile',
      imgUrl: 'https://media.giphy.com/media/5PmikwWSPNTDNIR3J4/giphy.gif',
    },
    {
      title: 'Hawk Shop',
      description: 'E-Commerce web store for latest kicks and street wear',
      imgUrl: 'https://media.giphy.com/media/vZhhLK5jwgb0s03Jzk/giphy.gif',
    },
  ];
  return (
    <section className='project' id='projects'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
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
                  <Nav.Link eventKey='second'>Back End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>tab 3</Nav.Link>
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
                <Tab.Pane eventKey='third'>Lorum Ipsum</Tab.Pane>
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
