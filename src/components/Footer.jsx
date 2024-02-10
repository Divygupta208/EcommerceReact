import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaFacebook, FaYoutube, FaSpotify } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <Navbar data-bs-theme="dark" className="px-5 footer">
        <Container>
          <Navbar.Brand href="#home" className="">
            <h2>The Generics</h2>
          </Navbar.Brand>
          <Nav className="ms-5 gap-5 ">
            <Nav.Link href="#home">
              <FaFacebook className="icon" />
            </Nav.Link>
            <Nav.Link href="#features">
              <FaYoutube className="icon" />
            </Nav.Link>
            <Nav.Link href="#pricing">
              <FaSpotify className="icon" />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </footer>
  );
};

export default Footer;
