import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import CustomRadioButton from "../CustomRadioButton/CustomRadioButton";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addInterestDuration } from "../../slices/userProfile";
import { nextQuestion } from "../../slices/question";

const durationArr = [
  "0-3 months",
  "3-6 months",
  "6-12 months",
  "1-2 years",
  "2+ years",
];

export default function Question1(props) {
  const [interestDuration, setInterestDuration] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addInterestDuration(interestDuration));

    dispatch(nextQuestion());
    console.log("submitting Q3...");
  };

  const onInterestDurationSelect = (e) => {
    setInterestDuration(e.target.value);
    console.log(e.target.value);
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
              {durationArr.map((item, idx) => (
                <CustomRadioButton
                  key={idx}
                  id="interestDuration"
                  name="interestDuration"
                  value={item}
                  label={item}
                  handleChange={onInterestDurationSelect}
                />
              ))}
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
