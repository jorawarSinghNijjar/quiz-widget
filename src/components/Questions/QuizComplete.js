import React, { useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { sendEmailDevUrl } from "../constants/constants";

export default function QuizComplete(props) {
  const { userProfile } = useSelector((state) => state);

  const sendEmail = () => {
    console.log(userProfile);
    axios
      .post(sendEmailDevUrl, userProfile)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  

  useEffect(() => {
    sendEmail();
  },[]);

  return (
    <div>
      <Row>
        <Col>
          <h1 className="widget-heading">{props.question}</h1>
        </Col>
      </Row>
    </div>
  );
}
