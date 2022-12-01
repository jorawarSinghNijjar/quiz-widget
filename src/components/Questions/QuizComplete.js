import React,{useEffect} from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function Q1(props) {

  return (
    <div>
      <Row>
        <Col>
          <h1 className="widget-heading">{props.question}</h1>
        </Col>
      </Row>
    </div>
  );
}
