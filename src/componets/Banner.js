import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items">
        <Col lg={8}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../assets/one.jpeg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../assets/two.jpeg")}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../assets/three.jpeg")}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5 mt-3">Pizzas for Every Occasional</h2>
        <p className="lead text-muted">Lorem ipsum dolorlaudantium, nam impedit!</p>
      </div>
    </Container>
  );
};

export default Banner;
