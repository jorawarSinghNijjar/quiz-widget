import React,{useEffect} from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addName } from "../../slices/userProfile";
import { nextQuestion } from "../../slices/question";

export default function Q1(props) {

  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addName(name));
    dispatch(nextQuestion());

    console.log("submitting Q1...");
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
            <Form.Group className="mb-3">
              <Form.Label>Your first and last names</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            {/* <div className="bottom-row"> */}
              {/* <Row> */}
                {/* <Col md={8} className="mx-auto"> */}
                  {/* Remember icon is sourced from fontawesome */}
                  <Button
                    type="submit"
                    className="q-btn d-flex justify-content-between"
                  >
                    <div className="button-text">Next Step</div>
                    <div>
                      <i className="fa-solid fa-circle-chevron-right button-icon"></i>
                    </div>
                  </Button>
                {/* </Col> */}
              {/* </Row> */}
            {/* </div> */}
          </Form>
        </Col>
      </Row>
    </div>
  );
}
