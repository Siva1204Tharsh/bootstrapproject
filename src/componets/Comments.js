import React from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

const Comments = () => {
  return (
    <section id="contact" className="bg-light py-3">
      <div className="text-center my-2 py-3">
        <h2 className=" text-primary">
          <i class="bi bi-chat-heart-fill"></i>Comments
        </h2>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-envelope-paper-fill"></i>
                </InputGroup.Text>
                <FloatingLabel controlId="floatingInput" label="Email">
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1"><i class="bi bi-person-fill"></i></InputGroup.Text>
                <FloatingLabel controlId="floatingInput" label="Name">
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
              </InputGroup>

              <InputGroup className="mb-3">
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Comments"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                  />
                </FloatingLabel>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Comments;
