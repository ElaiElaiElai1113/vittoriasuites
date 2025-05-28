import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function AboutUs() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col
            lg={6}
            className="mb-4 mb-lg-0 "
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img
              src="/vittoriasuiteslogo.jpg"
              alt="About Us"
              className="img-fluid rounded shadow-lg"
            />
          </Col>
          <Col lg={6}>
            <h2
              className="display-5 fw-bold text-custom-darkbrown mb-4"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Discover Vittoria Suites Davao Condotel
            </h2>
            <p
              className="lead text-secondary"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              Welcome to **Vittoria Suites Davao Condotel**, where luxury meets
              unparalleled comfort. We offer a premier selection of beautifully
              appointed condominium suites designed to make your stay in Davao
              City truly unforgettable.
            </p>
            <p
              className="text-muted"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
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
