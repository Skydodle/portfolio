import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';
import { HashLink } from 'react-router-hash-link';

export const Banner = ({ isNavExpanded }) => {
  const [loopIndex, setLoopIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [typingSpeed, setTypingSpeed] = useState(100);
  const toRotate = ['Software Engineer', 'Web Developer', 'UI/UX Designer'];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, typingSpeed);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayText]);

  const tick = () => {
    let i = loopIndex % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, displayText.length - 1)
      : fullText.substring(0, displayText.length + 1);

    setDisplayText(updatedText);

    if (isDeleting) {
      setTypingSpeed(100);
    } else {
      setTypingSpeed(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setTypingSpeed(2000);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopIndex(loopIndex + 1);
    }
  };

  return (
    <section
      className={`banner ${isNavExpanded ? 'nav-expanded' : ''}`}
      id='home'
    >
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio </span>
            <h1>
              {`Hi I'm Johnny `}
              <div className='rotating-text'>&nbsp;{displayText}</div>
            </h1>
            <p>
              A Full Stack Software Engineer skilled at creating web
              applications with intuitive user interfaces, excelled in
              developing elegant solutions to complex problems. Committed to
              continuous learning and dive into new concepts
            </p>
            <HashLink smooth to='#connect'>
              <button>
                Let's connect
                <ArrowRightCircle size={25} />
              </button>
            </HashLink>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header Img' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
