import React, { useState } from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const PickoftheWeek = () => {
  const [show, setShow] = useState(false);
  return (
    <section id="musttry" className="my-3">
      <div className="text-center my-2 py-3">
        <h2 className="display-5 text-primary">
          <i class="bi bi-search-heart"></i>Pick of the Week!
        </h2>
      </div>
      <Container>
        <Row className="align-items-center">
          <Col md={7}>
            <Image
              src={require("../assets/center.jpeg")}
              fluid={true}
              alt="pizza"
            />
          </Col>
          <Col md={5}>
            <div className="p-3">
              <h2 className="h1">Double Cheese Fajita</h2>
              <p className="lead text-muted">
                A delicious and easy-to-make meal that's perfect for a quick
                lunch or dinner.
              </p>
              <Button variant="primary" onClick={() => setShow(true)}>
                <i class="bi bi-basket"></i> Order Now
              </Button>
            </div>
          </Col>
        </Row>

        <ToastContainer
          className="position-fixed bottom-0 end-0 p-3"
          position="bottom-end"
          style={{ zIndex: 1 }}
        >
          <Toast show={show} onClose={() => setShow(false)} delay={5000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>items added to card.  </Toast.Body> 
          </Toast>
        </ToastContainer>
      </Container>
    </section>
  );
};

export default PickoftheWeek;

///// section kuduththan navbar oda link pannalam
