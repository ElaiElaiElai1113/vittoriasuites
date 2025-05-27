import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutUs() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img
              src="src/assets/vittoriasuiteslogo.jpg"
              alt="About Us"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
          <Col lg={6}>
            <h2 className="display-5 fw-bold text-custom-darkbrown mb-4">
              Discover Vittoria Suites Davao Condotel
            </h2>
            <p className="lead text-secondary">
              Welcome to **Vittoria Suites Davao Condotel**, where luxury meets
              unparalleled comfort. We offer a premier selection of beautifully
              appointed condominium suites designed to make your stay in Davao
              City truly unforgettable.
            </p>
            <p className="text-muted">
              Whether you're here for business, leisure, or a family vacation,
              our spacious and elegantly furnished units provide the perfect
              sanctuary. Our commitment is to deliver a seamless and memorable
              experience, blending the warmth of Filipino hospitality with the
              modern conveniences you desire. Discover a new standard of
              accommodation in Davao – discover Vittoria Suites.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AboutUs;
