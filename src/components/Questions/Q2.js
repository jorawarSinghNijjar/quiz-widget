import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import CustomRadioButton from "../CustomRadioButton/CustomRadioButton";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGender, addDob } from "../../slices/userProfile";
import { nextQuestion } from "../../slices/question";

export default function Question1(props) {
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(addGender(gender));
    dispatch(addDob(dob));

    dispatch(nextQuestion());
    console.log("submitting Q2...");
  };

  const onGenderSelect = (e) => {
    setGender(e.target.value);
    console.log(e.target.value);
  };

  const onDobSelect = (e) => {
    setDob(e.target.value);
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
              <Form.Label>Gender at birth</Form.Label>
              {["Male", "Female"].map((item, idx) => (
                <CustomRadioButton
                  key={idx}
                  id="gender"
                  name="gender"
                  value={item}
                  label={item}
                  handleChange={onGenderSelect}
                />
              ))}

              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                placeholder="Eg. 22 Oct 2022"
                onChange={onDobSelect}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3">
             
            </Form.Group> */}
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
