import { Container, Row, Col } from "react-bootstrap";
import selfImg from "../assets/Assets/self.jpg";
import { ArrowRight } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Location from '../assets/Assets/location.svg'
import blob_image from '../assets/Assets/blob_animation.svg'

export const Banner = () => {
  function handleOpenChat() {
    if (typeof window !== 'undefined') {
      window.drift.api.openChat();
    }
  }

  return (
    <section className="banner" id="home">
      <div className="cursor"></div>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <div className='address'>
                  <img className="tagline" src={Location} alt='location-logo'/>
                  <p id='local'><small>39.2673° N, 76.7983° W</small></p>
                </div>
                <h1>Hello!</h1>
                <h1>I'm Astrid Jiang</h1>
                <h3>Software Developer</h3>
                <p>Hello there! I'm a software developer with over 7 years of experience in the tech industry, specializing in building scalable applications and crafting efficient, user-friendly solutions. Throughout my career, I’ve worked with a variety of technologies and frameworks, including JavaScript, TypeScript, React, Redux, Python, Node.js, and more, sharpening my skills in software architecture, problem-solving, and collaborating with cross-functional teams.

                  <br/> <br/> In my free time, I’m passionate about gardening, particularly growing heirloom tomatoes and experimenting with unique watermelon varieties. I’m also an avid traveler, having explored places like Iceland, Greece, Italy, Mexico, Spain, and more. These experiences have broadened my worldview and continue to inspire my creative approach to coding and problem-solving.</p>

                <button className="drift-open-chat" onClick={handleOpenChat}>
                  <div className="button-container">
                    <img src={blob_image} alt="Button Background Image" />
                    <div className="text-container">
                      <p>Click to Chat</p>
                    </div>
                    <div className="icon-container">
                      <ArrowRight size={25} />
                    </div>
                  </div>
                </button>

              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                  <img id='selfie' src={selfImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
