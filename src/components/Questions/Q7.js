import React, { useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import CustomCheckBox from "../CustomCheckBox/CustomCheckbox";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addCurrentSuplements,
  addDislikedSupplements,
} from "../../slices/userProfile";
import { nextQuestion } from "../../slices/question";
import { SupplementList } from "../../data/model/SupplementList";

const {
  NMN,
  TMG,
  FISETIN,
  OMEGA_3,
  CREATINE,
  CA_AKG,
  RESVERATROL,
  HLA,
  COQ10,
  COLLAGEN_PEPTIDES,
  QUERCETIN,
  BERBERINE,
  VIT_D3_MG_K2,
  SPERMIDINE,
  SIRT_6_ACTIVATOR
} = SupplementList;

const supplementsArr = [
  { id: 1, text: "None", sup: "" },
  // { id: 2, text: "NMN or NR" },
  { id: 2, text: "NMN or NR", sup: NMN },
  { id: 3, text: "Resveratrol", sup: RESVERATROL },
  { id: 4, text: "TMG", sup: TMG },
  { id: 5, text: "Vitamin D3", sup: VIT_D3_MG_K2 },
  { id: 6, text: "Omega 3", sup: OMEGA_3 },
  { id: 7, text: "Fisetin", sup: FISETIN },
  { id: 8, text: "Quercetin", sup: QUERCETIN },
  { id: 9, text: "Berberine", sup: BERBERINE },
  { id: 10, text: "Spermidine", sup: SPERMIDINE },
  { id: 11, text: "Sirt 6 Activator", sup: SIRT_6_ACTIVATOR },
  { id: 12, text: "Hyaluronic Acid", sup: HLA },
  { id: 13, text: "CA-AKG", sup: CA_AKG },
];

export default function Q7(props) {
  const [selectedSupplements, setSelectedSupplements] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);

  const dispatch = useDispatch();

  const onFormSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addDislikedSupplements(selectedSupplements.map((item) => item.sup))
    );
    dispatch(nextQuestion());

    console.log("submitting Q7...");
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
      console.log("New item");
      selectedCheckboxesArr.push(id);
      setSelectedSupplements(
        selectedSupplements.concat(supplementsArr[id - 1])
      );
    }

    setSelectedCheckboxes(selectedCheckboxesArr);
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
