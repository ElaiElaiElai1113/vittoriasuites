import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <Container>
        <Row className="g-4">
          <Col md={4} className="text-center text-md-start">
            <h5 className="fw-bold mb-3">Vittoria Suites Davao Condotel</h5>
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill me-2"></i>Camella Northpoint,
              Bajada, Davao City
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i>099999999
            </p>
            <p className="mb-1">
              <i className="bi bi-envelope-fill me-2"></i>iofjewoaiwfj@gmail.com
            </p>
          </Col>
          <Col md={4} className="text-center">
            <h5 className="fw-bold mb-3">Office Hours</h5>
            <p className="mb-1">Monday - Friday: 08:00 AM - 05:00 PM</p>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h5 className="fw-bold mb-3">Find Us on the Map</h5>
            <div className="map-responsive rounded shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126656.82859842827!2d125.36326808962063!3d7.237885640898679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f96c54f75d01d3%3A0x6530b64a0d56dd42!2sNorthpoint%20Davao%20%7C%20RFO%20Condo%20In%20Davao!5e0!3m2!1sen!2sph!4v1748344618028!5m2!1sen!2sph"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Vittoria Suites Location"
              ></iframe>
            </div>
          </Col>
        </Row>
        <hr className="my-4 border-warning" />
        <p className="text-center text-muted small mb-0">
          © {new Date().getFullYear()} Vittoria Suites Davao Condotel. All
          rights reserved.
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
