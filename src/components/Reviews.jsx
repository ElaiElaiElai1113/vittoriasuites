import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

function Reviews() {
  const reviewsData = [
    {
      platformLogo: "/images/airbnb-logo.png",
      reviewerAvatar: "/images/reviewer-maria.jpg",
      reviewerName: "Maria L. (from Airbnb)",
      reviewText:
        "Vittoria Suites exceeded our expectations! The suite was incredibly spacious, clean, and beautifully furnished. The kids loved the pool, and the location was perfect for exploring Davao. Highly recommend!",
    },
    {
      platformLogo: "/images/google-reviews-logo.png",
      reviewerAvatar: "/images/reviewer-john.jpg",
      reviewerName: "John D. (Google Local Guide)",
      reviewText:
        "Fantastic stay! The staff was incredibly helpful, and the views from our balcony were stunning. Having free parking was a huge plus. Will definitely be back on our next trip to Davao.",
    },
  ];

  return (
    <section id="reviews" className="py-5 bg-light">
      <Container>
        <h2 className="display-5 fw-bold text-center text-custom-darkbrown mb-5">
          What Our Guests Say
        </h2>
        <Carousel
          controls={true}
          indicators={false}
          className="shadow-lg reviews-carousel"
        >
          {reviewsData.map((review, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                <Col md={8} className="p-4">
                  <Card className="border-0 shadow-sm review-card">
                    <Card.Body className="text-center">
                      <div className="mb-3">
                        <img
                          src={review.platformLogo}
                          alt="Platform Logo"
                          className="review-platform-logo"
                        />
                      </div>
                      <img
                        src={review.reviewerAvatar}
                        alt={review.reviewerName}
                        className="rounded-circle mb-3 review-avatar"
                      />
                      <Card.Title className="h5 fw-bold mb-2">
                        {review.reviewerName}
                      </Card.Title>
                      <Card.Text className="fst-italic text-muted">
                        "{review.reviewText}"
                      </Card.Text>
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

export default Reviews;
