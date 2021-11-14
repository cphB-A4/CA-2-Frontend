import { Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Container>
        <Row className="rows">
          <Col xs={2} className="columns">
            1 of 3
          </Col>
          <Col className="columns">
            <h1 className="text-center">Welcome to dummy API's!</h1>
            <br></br>
            <p>No user: Home, FetchSingle and Login</p>
            <p>User: Home, FetchSingle, FetchSequentially and Logout</p>
            <p>Admin: Home, FetchSingle, FetchParallel and Logout</p>
          </Col>
          <Col xs={2} className="columns">
            3 of 3
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
