import React from "react";
import Button from "./components/Button/Button";
import { Row, Col, Container, ProgressBar, Form } from "react-bootstrap";
import "./App.scss";
import backBtnIcon from "./assets/images/icons/back-arrow.svg";

const App = () => {
  return (
    <div>
      <Container className="container-box d-flex flex-column justify-content-between">
        <div>
          <Row>
            <Col className="title-col">
              <i class="fa-solid fa-arrow-left back-btn-icon"></i>

              <h5 className="widget-title">Recommendation Engine</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <ProgressBar
                variant="primary"
                now={12}
                className="widget-progress-bar"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h1 className="widget-heading">About You</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Your first and last names</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </div>

        <div className="bottom-row">
          <Row>
            <Col md={8} className="mx-auto">
              {/* Remember icon is sourced from fontawesome */}
              <Button>Next Step</Button>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default App;
