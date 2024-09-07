import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ai_proj.png";
import projImg2 from "../assets/img/proj_2_img.jpeg";
import projImg3 from "../assets/img/proj_3_img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

  const projects = [
    {
      title: "AI Image Generation App",
      description: "Javascript, React, MongoDB, Tailwind, Cloudinary",
      imgUrl: projImg1,
      link1:'https://close-ai-53ot.onrender.com',
      link2:'https://github.com/beingjiang/AI_image_React_app'
    },
    {
      title: "Covid-19&&FAANG Stock Analysis ",
      description: "Python, KNN, LSTM, Linear, Regression",
      imgUrl: projImg2,
      link1: 'https://hub.gke2.mybinder.org/user/beingjiang-covi-ending-analysis-6nlyru1s/lab/workspaces/auto-q/tree/index.html',
      link2: 'https://hub.gke2.mybinder.org/user/beingjiang-covi-ending-analysis-6nlyru1s/lab/workspaces/auto-q/tree/index.html',
      
    },
    {
      title: "Web3 Blockchain Crowdfunding Platform",
      description: "Javascript, React, Tailwind, Smart Contract",
      imgUrl: projImg3,
      link1: 'https://glistening-fairy-7807aa.netlify.app',
      link2:'#',
    },
    
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <div className='scrolling-text'>
                <h2>Projects</h2>
                </div>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    
                    
                  </Nav>
                  <Tab.Content id="slideInUp">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                
                                />
                            )
                          })
                        }
                      </Row>
                    
                  
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
