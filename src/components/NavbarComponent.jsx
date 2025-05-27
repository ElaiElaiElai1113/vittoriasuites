import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="py-3">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4 text-custom-brown">
          Vittoria Suites Davao Condotel
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#hero" className="mx-2 text-white">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="mx-2 text-white">
              About Us
            </Nav.Link>
            <Nav.Link href="#amenities" className="mx-2 text-white">
              Amenities
            </Nav.Link>
            <Nav.Link href="#units" className="mx-2 text-white">
              Units
            </Nav.Link>
            <Nav.Link href="#accommodations" className="mx-2 text-white">
              Accommodations
            </Nav.Link>
            <Nav.Link href="#reviews" className="mx-2 text-white">
              Reviews
            </Nav.Link>
            <Nav.Link href="#contact" className="mx-2 text-white">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
