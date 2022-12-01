import React,{useState} from "react";
import {Form } from "react-bootstrap";


export default function CustomCheckBox({id,label, name, value, handleChange, isChecked, descText, disabled, reverse}) {

  return (
    <Form.Check type="checkbox" id={id}>
      <div className="d-flex justify-content-between checkbox-wrapper">
        <div className={`order-${reverse ? 2 : 1}`}>
          <Form.Check.Label>{label}</Form.Check.Label>
          {descText ? <div className="desc-text">{descText}</div> : <></>}
        </div>
        <div className={`order-${reverse ? 1 : 2}`}>
          <Form.Check.Input
            type="checkbox"
            name={name}
            value={value}
            checked={isChecked}
            onChange={handleChange}
            disabled={disabled}
          />
        </div>
      </div>
    </Form.Check>
  );
}
