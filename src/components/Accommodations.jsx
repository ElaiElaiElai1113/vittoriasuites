import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";

function Accommodations() {
  const accommodationUnits = [
    {
      name: "Two Bedroom Townhouse",
      price: "2,500",
      image: "/images/two-bedroom-townhouse.jpg",
    },
    {
      name: "Family Three Bedroom Suite",
      price: "3,500",
      image: "/images/family-three-bedroom.jpg",
    },
    {
      name: "Deluxe Two Bedroom Suite",
      price: "[Client to provide price]",
      image: "/images/deluxe-two-bedroom.jpg",
    },
  ];

  return (
    <section
      id="accommodations"
      className="py-5 bg-custom-darkbrown text-white"
    >
      <Container>
        <h2 className="display-5 fw-bold text-center mb-5 text-custom-brown">
          Our Premium Accommodations
        </h2>
        <Carousel
          indicators={false}
          nextIcon={
            <span aria-hidden="true" className="carousel-control-next-icon" />
          }
          prevIcon={
            <span aria-hidden="true" className="carousel-control-prev-icon" />
          }
        >
          {accommodationUnits.map((unit, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                <Col md={8} lg={6}>
                  <Card className="bg-dark text-white text-center shadow-lg accommodation-card">
                    <Card.Img
                      variant="top"
                      src={unit.image}
                      alt={unit.name}
                      className="accommodation-image"
                    />
                    <Card.Body className="p-4">
                      <Card.Title className="h3 fw-bold text-warning">
                        {unit.name}
                      </Card.Title>
                      <Card.Text className="fs-4 fw-bold mb-0">
                        PHP {unit.price}/night
                      </Card.Text>
                      <Button variant="warning" className="mt-3 fw-bold">
                        View Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
}

export default Accommodations;
