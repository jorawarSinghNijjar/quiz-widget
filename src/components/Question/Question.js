import React from "react";
import { Row, Col, ProgressBar, Form } from "react-bootstrap";
import Error from "../Error/Error";
import Q1 from "../Questions/Q1";
import Q2 from "../Questions/Q2";
import Q3 from "../Questions/Q3";
import Q4 from "../Questions/Q4";
import Q5 from "../Questions/Q5";
import Q6 from "../Questions/Q6";
import Q7 from "../Questions/Q7";
import Q8 from "../Questions/Q8";
import Q9 from "../Questions/Q9";
import QuizComplete from "../Questions/QuizComplete";
const questionsArr = [
  "About you",
  "About you",
  "How long have you been interested in/following longevity science?",
  "What is your main reason for being interested in  longevity science?",
  "Which supplements are you currently taking?",
  "Which lifestyle changes do you curently implement?",
  "Are there any of the following that you woudln’t try or have tried in the past and disliked?",
  "Choose your top 3 longevity goals",
  "Enter your email address to recieve your plan",
  "Your recommendation has been sent on your email"
];

export default function Question(props) {
  const renderQuestion = () => {
    switch (props.questionNumber) {
      case 1:
        return <Q1 question={questionsArr[0]} />;

      case 2:
        return <Q2 question={questionsArr[1]} />;
      case 3:
        return <Q3 question={questionsArr[2]} />;
      case 4:
        return <Q4 question={questionsArr[3]} />;
      case 5:
        return <Q5 question={questionsArr[4]} />;
      case 6:
        return <Q6 question={questionsArr[5]} />;
      case 7:
        return <Q7 question={questionsArr[6]} />;
      case 8:
        return <Q8 question={questionsArr[7]} />;
      case 9:
        return <Q9 question={questionsArr[8]} />;
      case 10:
        return <QuizComplete question={questionsArr[9]} />;
      default:
        return <Error />;
    }
  };

  return <div>{renderQuestion()}</div>;
}
