import facade from "../apiFacade";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

function FetchSequentially() {
  //const intialValue = { fact: "", length: "" };
  const [data, setData] = useState({});

  const getAlotData = () => {
    facade.fetchAlotData().then((json) => {
      console.log(json);
      setData(json);
    });
  };
  return (
    <div>
      <Container>
        <Row className="rows">
          <Col xs={2} className="columns">
            1 of 3
          </Col>
          <Col className="columns text-center">
            <h1 className="text-center">
              Get a lot of random Facts from 4 API's!
            </h1>
            <br></br>

            <button className="btn btn-primary mt-3" onClick={getAlotData}>
              Click me
            </button>
          </Col>
          <Col xs={2} className="columns">
            3 of 3
          </Col>
        </Row>
      </Container>
      {console.log(data)}
    </div>
  );
}

export default FetchSequentially;
