
import { Container, Row, Col } from "react-bootstrap";
import selfImg from "../assets/Assets/self.jpg";
import { ArrowRight } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Location from '../assets/Assets/location.svg'
import blobimage from '../assets/Assets/blobanimation.svg'

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
                <img className="tagline" src ={Location} alt ='location-logo'/>
                <p id = 'local'><small>39.2673° N, 76.7983° W</small></p>
                </div>
                <h1>Hello!</h1>
                  <h1>I'm Bingying Jiang</h1>
                <h3>Software Developer</h3>
                  <p>Hello there! I'm a recent CS graduate with a love for gardening, cooking, and travel. Before jumping into the tech world, I gained valuable experience as a restaurant owner, where I honed my skills in customer service, teamwork, and management.

<br/> <br/> In my free time, I love to garden and grow my own food, particularly heirloom tomatoes and unusual watermelons. I'm also a travel enthusiast and have been lucky enough to explore places like Iceland, Greece, and Italy, which have broadened my perspective and inspired me to approach problems with creativity and flexibility.</p>

                  <button class="drift-open-chat" onClick={handleOpenChat}>
                <div class="button-container">
                  <img src={blobimage} alt="Button Background Image" />
                  <div class="text-container">
                    <p>Click to Chat</p>
                  </div>
                  <div class="icon-container">
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
                  <img id = 'selfie' src={selfImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
  
}
