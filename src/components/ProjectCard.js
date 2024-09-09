import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link1,link2 }) => {
  return (
    <Col size={12} sm={6} md={4}>
        <div className="project-card">

      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className='proj-btn'>
          <a href={link1} target='_blank'>Live
      </a>
      <a href={link2} target='_blank'>Code
      
      </a>
      </div>
        </div>
      </div>
      </div>
    </Col>
  )
}
