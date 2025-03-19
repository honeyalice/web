import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../assets/Assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img id="blob" src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Item>
              <HashLink 
                smooth 
                to="/#home"
                className={activeLink === "home" ? "active navbar-link nav-link" : "navbar-link nav-link"}
                onClick={() => onUpdateActiveLink("home")}
              >
                ABOUT
              </HashLink>
            </Nav.Item>
            <Nav.Item>
              <HashLink 
                smooth 
                to="/#skills"
                className={activeLink === "skills" ? "active navbar-link nav-link" : "navbar-link nav-link"}
                onClick={() => onUpdateActiveLink("skills")}
              >
                SKILLS
              </HashLink>
            </Nav.Item>
            <Nav.Item>
              <Link 
                to="/experience"
                className={activeLink === "experience" ? "active navbar-link nav-link" : "navbar-link nav-link"}
                onClick={() => onUpdateActiveLink("experience")}
              >
                WORKING EXPERIENCE
              </Link>
            </Nav.Item>
          </Nav>
          <span className="navbar-text">
            <HashLink smooth to="/#connect">
              <button id="blob">Let's Connect</button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};