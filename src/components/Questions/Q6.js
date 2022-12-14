import React, { useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import CustomCheckBox from "../CustomCheckBox/CustomCheckbox";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCurrentLifeFactors,
  addCurrentSuplements,
  addReasonForInterest,
} from "../../slices/userProfile";
import { nextQuestion } from "../../slices/question";

const lifeFactorsArr = [
  { id: 1, text: "Nothing yet" },
  { id: 2, text: "Intermittent fasting" },
  { id: 3, text: "Sauna or hot immersion" },
  { id: 4, text: "Cold immersion" },
  { id: 5, text: "Sleep tracking" },
  { id: 6, text: "30 minutes of cardio >3 times a week" },
  { id: 7, text: "Strength training >2 times per week" },
  { id: 8, text: "Sunlight protocol" },
  { id: 9, text: "Other please specify" },
];

export default function Q6(props) {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [selectedLifeFactors, setSelectedLifeFactors] = useState([]);
  const [displayOtherTextField, setDisplayOtherTextField] = useState(false);
  const [otherFactor, setOtherFactor] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addCurrentLifeFactors(selectedLifeFactors.map((item) => item.text))
    );
    dispatch(nextQuestion());

    console.log("submitting Q6...");
  };

  const insertFactorInArr = (id) => {
    const selectedCheckboxesArr = selectedCheckboxes;

    const findIdx = selectedCheckboxesArr.indexOf(id);

    if (findIdx > -1) {
      // If checkbox is already selected
      console.log("Already in list");
      selectedCheckboxesArr.splice(findIdx, 1);
      setSelectedLifeFactors(
        selectedLifeFactors.filter((item) => {
          // console.log("item.id", item.id);
          // console.log("selectedCheckbox", id);
          return item.id !== id;
        })
      );
      // Hide other Textfield
      setDisplayOtherTextField(false);
    } else {
      // specify other textfield is hardcoded with id 9
      if (id === 9) {
        setDisplayOtherTextField(true);
        selectedCheckboxesArr.push(id);
        setSelectedLifeFactors(
          selectedLifeFactors.concat({ id: 9, text: otherFactor })
        );
      } else {
        // If checkbox is not selected yet
        console.log("New item");
        selectedCheckboxesArr.push(id);
        setSelectedLifeFactors(
          selectedLifeFactors.concat(lifeFactorsArr[id - 1])
        );
      }
    }

    setSelectedCheckboxes(selectedCheckboxesArr);
  };

  const onLifeFactorSelect = (id) => {
    insertFactorInArr(id);
  };

  const onOtherFactorChange = (e) => {
    setOtherFactor(e.target.value);
    //update text value in lifeFactorsArr
    setSelectedLifeFactors(
      selectedLifeFactors.map((item, idx) =>
        item.id === 9 ? { id: 9, text: e.target.value } : item
      )
    );
  };

  console.log(selectedLifeFactors);
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
              {displayOtherTextField ? (
                <Form.Control
                  autoFocus
                  type="text"
                  placeholder="Enter other factors here"
                  value={otherFactor}
                  onChange={onOtherFactorChange}
                />
              ) : (
                <></>
              )}
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
