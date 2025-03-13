import { FaPlus } from "react-icons/fa6";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { useNavigate, useParams } from "react-router-dom";

export default function AssignmentControls() {
  const { cid } = useParams();
  const navigate = useNavigate();
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Row>
        <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1" className="bg-white">
              <HiMagnifyingGlass />
            </InputGroup.Text>
            <Form.Control
              placeholder="Search..."
              aria-label="Search..."
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col>
          <Button
            variant="danger"
            size="lg"
            className="me-1 float-end"
            id="wd-view-progress"
            onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/new`)}
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Assignment
          </Button>
          <Button
            variant="secondary"
            size="lg"
            className="me-1 float-end"
            id="wd-add-module-btn"
          >
            <FaPlus
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Group
          </Button>
        </Col>
      </Row>
    </div>
  );
}
