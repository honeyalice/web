import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/Assets/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import resume from '../assets/img/Resume_BYJ.pdf'




export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img id = 'blob' src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link  href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>ABOUT</Nav.Link>
              <Nav.Link  href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>SKILLS</Nav.Link>
              <Nav.Link  href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>PROJECTS</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/bingying-jiang-7a720977/" target='_blank'  rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
              </div>
              </span>
              <HashLink smooth to='#connect'>
                <button id='blob'>Let’s Connect</button>
              </HashLink>
              <a href ={resume} target='_blank'  rel="noopener noreferrer"><button id='resume'>Resume <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <g>
    <path d="M19.071,4.929a10,10,0,1,0,0,14.142A10.011,10.011,0,0,0,19.071,4.929ZM17.657,17.657a8,8,0,1,1,0-11.314A8.01,8.01,0,0,1,17.657,17.657Z"/>
    <polygon points="9 10 12.586 10 8.293 14.293 9.707 15.707 14 11.414 14 15 16 15 16 8 9 8 9 10"/>
  </g>
</svg>

              </button>
              </a>
              

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
