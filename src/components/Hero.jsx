import React from "react";
import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section
      id="hero"
      className="hero-section d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("public/background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        <h1 className="display-3 fw-bolder mb-4">
          Escape to Luxury: Your Ultimate Davao Getaway Awaits at{" "}
          <span className="text-warning">Vittoria Suites</span>
        </h1>
        <p className="lead mb-5">
          Experience unparalleled comfort, convenience, and captivating views in
          the heart of Davao City. Your perfect home away from home starts here.
        </p>
        <Button
          variant="warning"
          size="lg"
          href="#accommodations"
          className="fw-bold"
        >
          Book Your Stay Now
        </Button>
      </Container>
    </section>
  );
}

export default Hero;
