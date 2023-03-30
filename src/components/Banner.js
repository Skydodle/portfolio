import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../assets/img/header-img.svg';

export const Banner = () => {
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
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my Portfolio </span>
            <h1>
              {`Hi I'm Johnny `}
              <br></br>
              <span className='wrap'>{displayText}</span>
              <p>
                A Full Stack Software Engineer skilled at creating web
                applications with intuitive user interfaces, excelled in
                developing elegant solutions to complex problems. Committed to
                never stop learning and dive headfirst into new concepts
              </p>
              <button onClick={() => console.log('connect')}>
                Let's connect
                <ArrowRightCircle size={25} />
              </button>
            </h1>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='Header Img' />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
