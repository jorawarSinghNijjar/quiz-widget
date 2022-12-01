import React,{useEffect} from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import CustomCheckBox from "../CustomCheckBox/CustomCheckbox";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCurrentLifeFactors, addCurrentSuplements, addReasonForInterest } from "../../slices/userProfile";
import { nextQuestion } from "../../slices/question";

const lifeFactorsArr = [
  { id: 1, text:"Intermittent fasting"},
  { id: 2, text: "Cold immersion"},
  { id: 3, text:"Sleep tracking"},
  { id: 4, text:"30 minutes of cardio >3 times a week"},
  { id: 5, text:"Strength training >2 times per week"},
  { id: 6, text:"Sunlight protocol"},
]

export default function Q6(props) {

  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedLifeFactors, setSelectedLifeFactors] = useState([]);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();


    dispatch(addCurrentLifeFactors(selectedLifeFactors.map(item => item.text)));
    dispatch(nextQuestion());

    console.log("submitting Q6...");
  };

  const onLifeFactorSelect = (id) => {
  
    const selectedCheckboxesArr = selectedCheckboxes;

    const findIdx = selectedCheckboxesArr.indexOf(id);

    if(findIdx > -1){
      console.log("Already in list")
      selectedCheckboxesArr.splice(findIdx,1);
      setSelectedLifeFactors(selectedLifeFactors.filter((item) => {
        // console.log("item.id", item.id);
        // console.log("selectedCheckbox", id);
        return item.id !== id
      }))
    }
    else{
      console.log("New item")
      selectedCheckboxesArr.push(id);
      setSelectedLifeFactors(selectedLifeFactors.concat(lifeFactorsArr[id-1]));
    }

    setSelectedCheckboxes(selectedCheckboxesArr);
  }
  console.log(selectedLifeFactors)
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
            {lifeFactorsArr.map((checkbox, idx) => (
              <CustomCheckBox
                key={checkbox.id}
                // id="interestDuration"
                selected={selectedCheckboxes.includes(checkbox.id)}
                name={checkbox.text}
                value={checkbox.text}
                label={checkbox.text}
                handleChange={() => onLifeFactorSelect(checkbox.id)}
              />
            ))}
          </Form.Group>

          <Button
            type="submit"
            className="q-btn d-flex justify-content-between"
          >
            <div className="button-text">Next Step</div>
            <div>
              <i className="fa-solid fa-circle-chevron-right button-icon"></i>
            </div>
          </Button>
        </Form>
      </Col>
    </Row>
  </div>
  );
}
