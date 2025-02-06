import { Col, Row } from "react-bootstrap";
import Modules from "./Modules";
import Status from "./Status";

export default function Home() {
  return (
    <Row>
      <h2>Course 1234</h2> <hr />
      <Col className="flex-fill me-3" md={6}>
        <Modules />
      </Col>
      <Col className="d-none d-xl-block" md={1}>
        <Status />
      </Col>
    </Row>
  );
}
