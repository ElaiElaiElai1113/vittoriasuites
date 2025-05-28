import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Amenities() {
  const amenitiesList = [
    {
      icon: "bi-house-heart-fill",
      title: "Your Ideal Home Away from Home",
      description:
        "Step into a world where every detail is crafted for your comfort. Our suites are meticulously designed living spaces, offering a cozy and inviting atmosphere that makes you feel instantly at ease.",
    },
    {
      icon: "bi-buildings-fill",
      title: "More Rooms, More Comfort, More Memories",
      description:
        "Experience the luxury of space with our generously sized suites, perfect for families and groups. Say goodbye to cramped hotel rooms and embrace the freedom of multiple bedrooms.",
    },
    {
      icon: "bi-geo-alt-fill",
      title: "Prime Locations",
      description:
        "Discover Davao with unparalleled ease! Vittoria Suites boasts a prime location, placing you at the doorstep of the city's most vibrant attractions, finest dining, and essential business districts.",
    },
    {
      icon: "bi-water",
      title: "Unwind Poolside in Comfort and Style",
      description:
        "Immerse yourself in serenity at our exquisite swimming pool. Whether you seek a refreshing dip or a leisurely afternoon, our poolside area provides the perfect escape.",
    },
    {
      icon: "bi-tree-fill",
      title: "Tranquility with a View",
      description:
        "Awaken to breathtaking vistas and unwind amidst the peaceful embrace of Davao's skyline. Many of our suites offer stunning panoramic views from your private balcony.",
    },
    {
      icon: "bi-p-circle-fill",
      title: "Free Parking with Premium Options Available",
      description:
        "Enjoy the convenience of complimentary parking throughout your stay. For an elevated experience, we also offer premium parking options to ensure utmost security and accessibility.",
    },
  ];

  return (
    <section id="amenities" className="py-5 bg-custom-darkbrown">
      <Container>
        <h2
          className="display-5 fw-bold text-center text-custom-brown mb-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Experience Unmatched Comfort and Convenience
        </h2>
        <Row className="g-4">
          {amenitiesList.map((amenity, index) => (
            <Col md={6} lg={4} key={index}>
              <Card
                className="h-100 shadow-sm border-0 amenity-card"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-duration="1000"
              >
                <Card.Body className="text-center p-4">
                  <i
                    className={`bi ${amenity.icon} display-4 text-warning mb-3`}
                  ></i>
                  <Card.Title className="h5 fw-bold mb-2">
                    {amenity.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {amenity.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Amenities;
