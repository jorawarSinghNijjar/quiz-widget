import React from "react";
import {Form } from "react-bootstrap";


export default function CustomRadioButton({id,label, name, value, handleChange}) {

  return (
    <Form.Check type="radio" id={id}>
      <div className="d-flex justify-content-between checkbox-wrapper">
        <div className="order-1">
          <Form.Check.Label>{label}</Form.Check.Label>
        </div>
        <div className="order-2">
          <Form.Check.Input
            type="radio"
            name={name}
            value={value}
            onChange={handleChange}
          />
        </div>
      </div>
    </Form.Check>
  );
}
