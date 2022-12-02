import React, { useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import CustomCheckBox from "../CustomCheckBox/CustomCheckbox";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTopLongevityGoals } from "../../slices/userProfile";
import { nextQuestion } from "../../slices/question";
import { longevityGoalsArr } from "../../data/longevity-goals";

export default function Q8(props) {
  const [selectedLongevityGoals, setSelectedLongevityGoals] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [isDisabled, setIsDisabled] = useState();
  const [checkedCount, setCheckedCount] = useState(0);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTopLongevityGoals(selectedLongevityGoals.map((item) => item.text))
    );
    dispatch(nextQuestion());

    console.log("submitting Q8...");
  };

  const onGoalSelect = (e, id) => {
    const selectedCheckboxesArr = selectedCheckboxes;

    const findIdx = selectedCheckboxesArr.indexOf(id);

    if (findIdx > -1) {
      console.log("Already in list");
      setCheckedCount(checkedCount - 1);
      selectedCheckboxesArr.splice(findIdx, 1);
      setSelectedLongevityGoals(
        selectedLongevityGoals.filter((item) => {
          // console.log("item.id", item.id);
          // console.log("selectedCheckbox", id);
          return item.id !== id;
        })
      );
    } else {
      console.log("New item");
      if (selectedCheckboxes.length < 3) {
        setCheckedCount(checkedCount + 1);
        selectedCheckboxesArr.push(id);
        setSelectedLongevityGoals(
          selectedLongevityGoals.concat(longevityGoalsArr[id - 1])
        );
      }
    }

    setSelectedCheckboxes(selectedCheckboxesArr);
  };

  const checkDisable = (checkbox) => {
    if (selectedLongevityGoals.length === 3) {
      console.log("3 Done");
      if (selectedLongevityGoals.includes(checkbox.id)) {
        return false;
      } else {
        return true;
      }
    }
    return false;
  };
  console.log(selectedLongevityGoals);
  console.log(checkedCount);

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
              {longevityGoalsArr.map((checkbox, idx) => (
                <CustomCheckBox
                  key={checkbox.id}
                  // selected={selectedCheckboxes.includes(checkbox.id) && false}
                  name={checkbox.text.title}
                  value={checkbox.text.title}
                  label={checkbox.text.title}
                  descText={checkbox.text.desc}
                  handleChange={(e) => onGoalSelect(e, checkbox.id)}
                  disabled={checkDisable(checkbox)}
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
