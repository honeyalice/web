import React, { useState } from 'react';

const projects = [
  {
    image: 'https://github.com/tiffanyadu/portfolio/blob/master/assets/portfolio/tribute/tribute-teaser.png?raw=true',
    title: 'Twenty One Pilots Tribute',
    description: 'Responsive Web Design',
    detailsModal: '#tributeModal'
  },
  {
    image: 'https://github.com/tiffanyadu/portfolio/blob/master/assets/portfolio/tms/tms-teaser.png?raw=true',
    title: 'Too Much Sauce',
    description: 'Responsive Web Design',
    detailsModal: '#tmsModal'
  },
  {
    image: 'https://github.com/tiffanyadu/portfolio/blob/master/assets/portfolio/rb/rb-teaser.png?raw=true',
    title: 'Ryan Bechtel',
    description: 'Responsive Web Design',
    detailsModal: '#rbModal'
  }
];

export const Project = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % projects.length);
  };

  const activeProject = projects[activeIndex];

  return (
    <section id="projects" className="row bg-star-y">
      <div className="row">
        <div className="col-xs-12">
          <h1 className="mb-60">Portfolio</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12">
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="row">
                <div className="col-xs-12 col-md-7">
                  <img className="img-responsive center-block mb-30" src={activeProject.image} alt={activeProject.title} />
                </div>
                <div className="col-xs-12 col-md-5">
                  <div className="carousel-caption card">
                    <h3>{activeProject.title}</h3>
                    <h4>{activeProject.description}</h4>
                    <button className="btn td-btn small outline green" data-toggle="modal" data-target={activeProject.detailsModal}>View Details</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#" role="button" onClick={handlePrev}>
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#" role="button" onClick={handleNext}>
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </section>
  );
};
