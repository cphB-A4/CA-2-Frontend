import facade from "../apiFacade";
import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

function FetchSingle() {
  //const intialValue = { fact: "", length: "" };
  const [data, setData] = useState({});

  const getRandomCatFact = () => {
    facade.fetchSingleData().then((json) => {
      console.log(json);
      setData(json);
    });
  };

  //If you want a catFact right away uncomment this code:
  /*useEffect(() => {
    getRandomCatFact();
  }, []);*/

  return (
    <div>
      <Container>
        <Row className="rows">
          <Col xs={2} className="columns">
            1 of 3
          </Col>
          <Col className="columns">
            <h1 className="text-center">Get random cat fact API!</h1>
            <br></br>
            <h5>{JSON.stringify(data)}</h5>
            <button className="text-center" onClick={getRandomCatFact}>
              Click me
            </button>
          </Col>
          <Col xs={2} className="columns">
            3 of 3
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FetchSingle;
