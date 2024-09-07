import reactIcon from "../assets/img/react-Icon.svg";
import python from "../assets/img/python.svg";
import javascript from "../assets/img/javascript-Icon.svg";
import mongodb from "../assets/img/mongodb.svg";
import Java from "../assets/img/java.svg";
import node from "../assets/img/Node.js_logo.svg";
import flask from "../assets/img/pocoo_flask-icon.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 7
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" >
                            <div className="item">
                                <img src={reactIcon} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={javascript} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={Java} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={python} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={node} alt="Image" />
                            </div>
                            <div className="item">
                                <img src={flask} alt="Image" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
