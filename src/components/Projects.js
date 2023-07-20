import { Col, Container, Row, Nav, Tab } from 'react-bootstrap';

export const Projects = () => {
  const projects = [];
  return (
    <section className='project' id='project'>
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
              <Nav variant='pills' defaultActiveKey='/home'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
            </Tab.Container>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                <Row>
                  {projects.map((project, index) => {
                    return <p>{project.title}</p>;
                  })}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
