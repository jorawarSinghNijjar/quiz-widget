import React, { useEffect, useState } from "react";
import { Row, Col, Spinner, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { prodUrl } from "./../../apiUrlConfig";
import { previousQuestion } from "../../slices/question";

export default function QuizComplete(props) {
  const { userProfile } = useSelector((state) => state);
  const dispatch = useDispatch();

  // const [hasError, setHasError] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = () => {
    console.log(userProfile);
    axios
      .post(`${prodUrl}/send-email`, userProfile)
      .then(function (response) {
        console.log("Email sent successfully", response);
        setMessage("Recommendation has been sent your Email !");
      })
      .catch(function (error) {
        console.log("Error sending email");
        console.log(error);
        setMessage("Error submiting... Redirecting...");
        setTimeout(() => {
          dispatch(previousQuestion());
        }, 2000);
      });
  };

  useEffect(() => {
    sendEmail();
  }, []);

  return (
    <div>
      <Row>
        <Col>
          <h1 className="widget-heading">
            {message ? message : <Spinner animation="border" variant="light" />}
          </h1>
        </Col>
      </Row>
    </div>
  );
}
