import { Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

export const ProjectCard = ({
  title,
  description,
  techStack,
  githubLink,
  liveLink,
  imgUrl,
}) => {
  return (
    <Col sm={6} md={4}>
      <div className='proj-imgbx'>
        <img src={imgUrl} alt='project demo' />
        <div className='proj-txtx'>
          <span className='tech-stack'>{techStack}</span>
          <h4>{title}</h4>
          <span>{description}</span>
          <div className='proj-btns'>
            <Button
              variant='outline-dark'
              className='icon-button'
              href={githubLink}
              target='_blank'
            >
              <FontAwesomeIcon icon={faGithub} />
            </Button>{' '}
            {liveLink && (
              <Button
                variant='outline-success'
                className='icon-button'
                href={liveLink}
                target='_blank'
              >
                <FontAwesomeIcon icon={faExternalLinkAlt} />
              </Button>
            )}{' '}
          </div>
        </div>
      </div>
    </Col>
  );
};
