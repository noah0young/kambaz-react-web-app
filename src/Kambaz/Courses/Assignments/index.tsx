import { Col, ListGroup, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsGripVertical } from "react-icons/bs";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButtons from "./AssignmentControlButtons";
import AssignmentHeaderControlButtons from "./AssignmentHeaderControlButtons";
import { VscSaveAs } from "react-icons/vsc";

export default function Assignments() {
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
              <ListGroup.Item className="wd-assignment p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <Table>
                  <Col>
                    <Row>A1</Row>
                    <Row>
                      <p>
                        <p className="text-danger">Multiple Modules</p> |{" "}
                      </p>
                    </Row>
                  </Col>
                </Table>
                <VscSaveAs className="me-2 fs-3 text-success" />
                <AssignmentControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-assignment p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <VscSaveAs className="me-2 fs-3 text-success" /> A2
                <AssignmentControlButtons />
              </ListGroup.Item>
              <ListGroup.Item className="wd-assignment p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <VscSaveAs className="me-2 fs-3 text-success" /> A3
                <AssignmentControlButtons />
              </ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
      </div>
      {/* Old */}
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <br />
      <h2 id="wd-assignment-title">
        ASSIGNMENTS 40% of Total<button>+</button>
      </h2>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <div>
            <Link to="123" className="wd-assignment-link">
              A1 - ENV + HTML
            </Link>
            <br />
            <p>
              Multiple Modules | <strong>Not available until</strong> May 6 at
              12:00am | <strong>Due</strong> May 13 at 11:59pm | 100pt
            </p>
          </div>
        </li>
        {/* Duplicates of above */}
        <li className="wd-assignment-list-item">
          <div>
            <Link to="124" className="wd-assignment-link">
              A2 - CSS + BOOTSTRAP
            </Link>
            <br />
            <p>
              Multiple Modules | <strong>Not available until</strong> May 6 at
              12:00am | <strong>Due</strong> May 13 at 11:59pm | 100pt
            </p>
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <div>
            <Link to="125" className="wd-assignment-link">
              A3 - JAVASCRIPT + REACT
            </Link>
            <br />
            <p>
              Multiple Modules | <strong>Not available until</strong> May 6 at
              12:00am | <strong>Due</strong> May 13 at 11:59pm | 100pt
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
