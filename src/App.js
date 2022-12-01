import React, { useEffect, useState } from "react";
// import Button from "./components/Button/Button";
import {
  Row,
  Col,
  Container,
  ProgressBar,
  Form,
  Button,
} from "react-bootstrap";
import "./App.scss";
import backBtnIcon from "./assets/images/icons/back-arrow.svg";

import { useSelector, useDispatch } from "react-redux";
import { previousQuestion as previousQuestionAction} from './slices/question';

import Question from "./components/Question/Question";

// const userProfile = {
//   id: "",
//   email: "",
//   name: "",
//   gender: "",
//   longevityScienceInterestDuration: 0,
//   reasonForInterest: "",
//   currentSupplements: [],
//   currentLifeFactors: [],
//   dislikedSupplements: [],
//   topLongevityGoals: [], //max 3
// };

const App = () => {
  const {questionNumber} = useSelector((state) => state)
  // const profile = useSelector((state) => state);
  
  useEffect(() => {
    setCurrentQuestion(questionNumber.currentQuestion);
    setProgress(questionNumber.progress);
  },[questionNumber]);

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [progress, setProgress] = useState(11.12);

  const dispatch = useDispatch();
  const previousQuestion = () => {
    dispatch(previousQuestionAction());
  }

  return (
    <div>
      <Container className="container-box d-flex flex-column justify-content-between">
        <div>
          <Row>
            <Col className="title-col">
              <i className="fa-solid fa-arrow-left back-btn-icon" onClick={previousQuestion}></i>

              <h5 className="widget-title">Recommendation Engine</h5>
            </Col>
          </Row>
          <Row>
        <Col>
          <ProgressBar
            variant="primary"
            now={progress}
            className="widget-progress-bar"
          />
        </Col>
      </Row>
          <Question questionNumber={currentQuestion} />
        </div>
      </Container>
    </div>
  );
};

export default App;
