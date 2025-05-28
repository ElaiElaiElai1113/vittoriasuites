// src/components/Hero.js
import React from "react";
import { Container, Button } from "react-bootstrap";

function Hero() {
  return (
    <section
      id="hero"
      className="hero-section d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url("/background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container>
        {/* Animate the heading to fade up */}
        <h1
          className="display-3 fw-bolder mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Escape to Luxury: Your Ultimate Davao Getaway Awaits at{" "}
          <span className="text-warning">Vittoria Suites</span>
        </h1>
        {/* Animate the paragraph to fade up with a slight delay */}
        <p
          className="lead mb-5"
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          Experience unparalleled comfort, convenience, and captivating views in
          the heart of Davao City. Your perfect home away from home starts here.
        </p>
        {/* Animate the button to fade up with more delay */}
        <Button
          variant="warning"
          size="lg"
          href="#accommodations"
          className="fw-bold"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          Book Your Stay Now
        </Button>
      </Container>
    </section>
  );
}

export default Hero;
