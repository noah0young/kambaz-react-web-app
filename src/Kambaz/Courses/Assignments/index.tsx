import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentHeaderControlButtons from "./AssignmentHeaderControlButtons";
import { VscSaveAs } from "react-icons/vsc";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(({ course }) => cid === course);
  return (
    <div id="wd-assignments">
      <div>
        <AssignmentsControls />
        <br />
        <br />
        <br />
        <br />
        <ListGroup className="rounded-0" id="wd-modules">
          <ListGroup.Item className="wd-assignment-header p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              Assignments
              <AssignmentHeaderControlButtons />
            </div>
            <ListGroup className="wd-assignments rounded-0">
              {assignments.map((assignment) => (
                <ListGroup.Item
                  className="wd-assignment-link p-3 ps-1"
                  as={Link}
                  to={assignment._id}
                >
                  <Row>
                    <Col xs={2}>
                      <BsGripVertical className="me-2 fs-3" />
                      <VscSaveAs className="me-2 fs-3 text-success" />
                    </Col>
                    <Col xs={9}>
                      <Card className="border-0">
                        <Card.Text>
                          <h3>{assignment.title}</h3>
                        </Card.Text>
                        <Card.Text>
                          <p className="text-danger d-inline">
                            Multiple Modules
                          </p>{" "}
                          | <strong>Not available until</strong>{" "}
                          {assignment["available date"]} | <strong>Due</strong>{" "}
                          {assignment["due date"]} | {assignment["points"]}pt
                        </Card.Text>
                      </Card>
                    </Col>
                    <Col xs={1}>
                      <AssignmentControlButtons />
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
}
