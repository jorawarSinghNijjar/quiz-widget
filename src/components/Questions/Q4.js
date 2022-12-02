import React, { useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addReasonForInterest } from "../../slices/userProfile";
import { nextQuestion } from "../../slices/question";

export default function Q4(props) {
  const [answer, setAnswer] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addReasonForInterest(answer));
    dispatch(nextQuestion());

    console.log("submitting Q4...");
  };

  return (
    <div>
      <Row>
        <Col>
          <h1 className="widget-heading">{props.question}</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3 form-content-box">
              <Form.Control
                as="textarea"
                type="text"
                placeholder="Type your answer here..."
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
              />
            </Form.Group>
            <div className="q-btn__box fixed-bottom mx-auto">
              <Button
                type="submit"
                className="q-btn d-flex justify-content-between"
              >
                <div className="button-text">Next Step</div>
                <div>
                  <i className="fa-solid fa-circle-chevron-right button-icon"></i>
                </div>
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
