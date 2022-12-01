import React, { useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEmail } from "../../slices/userProfile";
import { nextQuestion } from "../../slices/question";
import logoIcon from "../../assets/images/icons/logo-icon.svg";
import logoText from "../../assets/images/icons/logo-text.svg";
import PolicyCheckBox from "../CustomCheckBox/PolicyCheckBox";
import axios from "axios";


export default function Q9(props) {
  // Emailing Process

  const {userProfile} = useSelector((state) => state);
  console.log(userProfile)

  const sendEmail = () => {

    axios.post('http://localhost:3300/send-email', userProfile)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  const [email, setEmail] = useState("");
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [validated, setValidated] = useState(false);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === true && policyAccepted) {
      setValidated(true);
      console.log("valid Form...");

      dispatch(addEmail(email));
      dispatch(nextQuestion());

      sendEmail();

      console.log("submitting Q9...");
    } else {
      console.log("Invalid Form...");
      setValidated(false);
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const onSelect = (e) => {
    setPolicyAccepted(e.target.checked);
  };

  return (
    <div>
      <Row>
        <Col>
          <div className="logo-box text-center">
            <img src={logoIcon} alt="logo-icon" className="logo-icon" />
            <img src={logoText} alt="logo-text" className="logo-text" />
          </div>
          <h1 className="widget-heading mx-auto" style={{ width: "80%" }}>
            {props.question}
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form noValidate validated={validated} onSubmit={onFormSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Eg. hello@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <Form.Control.Feedback type="invalid">
                Please provide a valid email
              </Form.Control.Feedback> */}
              <div className="policy-checkbox-wrapper d-flex justify-content-start">
                <PolicyCheckBox handleChange={onSelect} />
                <p className="policy-text">
                  I certify that I am 18 years of age or older, and I agree to
                  the <a href="www.google.com">Terms & Conditions</a> and{" "}
                  <a href="www.google.com">Privacy Policy</a>
                </p>
              </div>
            </Form.Group>

            <Button
              type="submit"
              className="q-btn d-flex justify-content-between"
            >
              <div className="button-text">Continue</div>
              <div>
                <i className="fa-solid fa-circle-chevron-right button-icon"></i>
              </div>
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="text-center mt-4 text-1">
            Have account? <a href="www.google.com">Log In</a>
          </p>
        </Col>
      </Row>
    </div>
  );
}
