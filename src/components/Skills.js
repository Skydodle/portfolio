import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Skills</h2>
              <p>Tools and technologies I use to bring products to life</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className='skill-slider'
              >
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                    alt='skills'
                  />
                  <h5>Javascript</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg'
                    alt='skills'
                  />
                  <h5>Typescript</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
                    alt='skills'
                  />
                  <h5>React</h5>
                </div>
                <div className='item'>
                  <i class='devicon-nextjs-original font-icons'></i>
                  <h5>NextJS</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'
                    alt='skills'
                  />
                  <h5>Tailwind</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='skills' />
                  <h5>Styled-Components</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
                    alt='skills'
                  />
                  <h5>Node</h5>
                </div>
                <div className='item'>
                  <i class='devicon-express-original font-icons'></i>
                  <h5>Express</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='skills' />
                  <h5>RESTful API</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg'
                    alt='skills'
                  />
                  <h5>NestJS</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
                    alt='skills'
                  />
                  <h5>GraphQL</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
                    alt='skills'
                  />
                  <h5>PostgreSQL</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
                    alt='skills'
                  />
                  <h5>MongoDB</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
                    alt='skills'
                  />
                  <h5>MySQL</h5>
                </div>
                <div className='item'>
                  <i class='devicon-github-original font-icons'></i>
                  <h5>Github</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                    alt='skills'
                  />
                  <h5>Git</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg'
                    alt='skills'
                  />
                  <h5>Docker</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg'
                    alt='skills'
                  />
                  <h5>NginX</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg'
                    alt='skills'
                  />
                  <h5>AWS EC2</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg'
                    alt='skills'
                  />
                  <h5>Bitbucket</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
                    alt='skills'
                  />
                  <h5>Figma</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
                    alt='skills'
                  />
                  <h5>HTML5</h5>
                </div>
                <div className='item'>
                  <img
                    src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
                    alt='skills'
                  />
                  <h5>CSS3</h5>
                </div>
                <div className='item'>
                  <img src={meter1} alt='skills' />
                  <h5>Web Development</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt='skills' />
                  <h5>Responsive Design</h5>
                </div>
                <div className='item'>
                  <img src={meter2} alt='skills' />
                  <h5>Microservices</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='background-image-left' alt='bg left' src={colorSharp} />{' '}
    </section>
  );
};
