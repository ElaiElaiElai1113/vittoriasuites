import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function UnitTypes() {
  return (
    <section id="units" className="py-5 bg-light">
      <Container>
        <h2
          className="display-5 fw-bold text-center text-custom-darkbrown mb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our Exquisite Condo Unit Types
        </h2>
        <Row
          className="g-4 justify-content-center"
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-duration="1000"
        >
          <Col md={6}>
            <Card className="h-100 shadow-lg border-0 unit-card">
              <Card.Img
                variant="top"
                src="/images/two-bedroom-placeholder.jpg"
                alt="Two Bedroom Suite"
                className="unit-image"
              />
              <Card.Body className="p-4">
                <Card.Title className="h4 fw-bold text-custom-darkbrown">
                  Two Bedroom Suite
                </Card.Title>
                <Card.Text className="text-muted">
                  This spacious unit is perfect for small families or groups,
                  offering a comfortable living area, a fully equipped kitchen,
                  and two private bedrooms for ultimate relaxation.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="h-100 shadow-lg border-0 unit-card">
              <Card.Img
                variant="top"
                src="/images/three-bedroom-placeholder.jpg"
                alt="Three Bedroom Suite"
                className="unit-image"
              />
              <Card.Body className="p-4">
                <Card.Title className="h4 fw-bold text-custom-darkbrown">
                  Three Bedroom Suite
                </Card.Title>
                <Card.Text className="text-muted">
                  Ideal for larger families or friends traveling together, our
                  three-bedroom suite provides expansive living spaces, multiple
                  bathrooms, and all the amenities needed for a memorable stay.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default UnitTypes;
