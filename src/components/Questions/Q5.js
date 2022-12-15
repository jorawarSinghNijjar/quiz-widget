import React, { useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import CustomCheckBox from "../CustomCheckBox/CustomCheckbox";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCurrentSuplements } from "../../slices/userProfile";
import { nextQuestion } from "../../slices/question";

const supplementsArr = [
  { id: 1, text: "None yet" },
  { id: 2, text: "NMN or NR" },
  { id: 3, text: "Resveratrol" },
  { id: 4, text: "TMG" },
  { id: 5, text: "Vitamin D3" },
  { id: 6, text: "Omega 3" },
  { id: 7, text: "Fisetin" },
  { id: 8, text: "Quercetin" },
  { id: 9, text: "Berberine" },
  { id: 10, text: "Spermidine" },
  { id: 11, text: "Sirt 6 Activator" },
  { id: 12, text: "Hyaluronic Acid" },
  { id: 13, text: "CA-AKG" },
  { id: 14, text: "Other please specify" },
];

export default function Q5(props) {
  const [selectedSupplements, setSelectedSupplements] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const [displayOtherTextField, setDisplayOtherTextField] = useState(false);
  const [otherSupplement, setOtherSupplement] = useState("");

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addCurrentSuplements(selectedSupplements.map((item) => item.text))
    );
    dispatch(nextQuestion());

    console.log("submitting Q5...");
  };

  const onSupplementSelect = (id) => {
    const selectedCheckboxesArr = selectedCheckboxes;

    const findIdx = selectedCheckboxesArr.indexOf(id);

    if (findIdx > -1) {
      console.log("Already in list");
      selectedCheckboxesArr.splice(findIdx, 1);
      setSelectedSupplements(
        selectedSupplements.filter((item) => {
          // console.log("item.id", item.id);
          // console.log("selectedCheckbox", id);
          return item.id !== id;
        })
      );
    } else {

      if (id === 14) {
        setDisplayOtherTextField(true);
        selectedCheckboxesArr.push(id);
        setSelectedSupplements(
          selectedSupplements.concat(supplementsArr[id - 1])
        );
      } else {
        // If checkbox is not selected yet
        console.log("New item");
        selectedCheckboxesArr.push(id);
        setSelectedSupplements(
          selectedSupplements.concat(supplementsArr[id - 1])
        );
      }

     
    }

    setSelectedCheckboxes(selectedCheckboxesArr);
  };

  const onOtherSupplementChange = (e) => {
    setOtherSupplement(e.target.value);
    //update text value in lifeFactorsArr
    setSelectedSupplements(
      selectedSupplements.map((item, idx) =>
        item.id === 14 ? { id: 14, text: e.target.value } : item
      )
    );
  };

  console.log(selectedSupplements);
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
              {supplementsArr.map((checkbox, idx) => (
                <CustomCheckBox
                  key={checkbox.id}
                  selected={selectedCheckboxes.includes(checkbox.id)}
                  name={checkbox.text}
                  value={checkbox.text}
                  label={checkbox.text}
                  handleChange={() => onSupplementSelect(checkbox.id)}
                />
              ))}
               {displayOtherTextField ? (
                <Form.Control
                  autoFocus
                  type="text"
                  placeholder="Enter other supplement here"
                  value={otherSupplement}
                  onChange={onOtherSupplementChange}
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
