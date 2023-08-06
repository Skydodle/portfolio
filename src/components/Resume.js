import { Col, Row } from 'react-bootstrap';

export const DownloadResume = () => {
  return (
    <Col lg={12}>
      <div className='download-resume-bx'>
        <Row>
          <Col lg={8} md={6}>
            <h3>Discover My Professional Journey</h3>
          </Col>
          <Col lg={4} md={6}>
            <div className='download-button-bx'>
              <a href='/resume.pdf' download='Johnny-Wu-Resume.pdf'>
                <button type='button'>Download My Resume</button>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
