import React,{useState} from "react";
import {Form } from "react-bootstrap";


export default function PolicyCheckBox({id,label, name, value, handleChange, isChecked, descText}) {

  return (
    <Form.Check type="checkbox" id={id}>
      <div className="d-flex justify-content-between policy-checkbox-wrapper">
        {/* <div className="order-2">
          <Form.Check.Label>{label}</Form.Check.Label>
          {descText ? <div className="desc-text">{descText}</div> : <></>}
        </div> */}
        <div className="order-1">
          <Form.Check.Input
            type="checkbox"
            name={name}
            value={value}
            checked={isChecked}
            onChange={handleChange}
          />
        </div>
      </div>
    </Form.Check>
  );
}
