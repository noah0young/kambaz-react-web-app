import {
  Button,
  Card,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  FormSelect,
  Row,
} from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import * as db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentsEditor() {
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { cid, assignmentID } = useParams();
  const possibleAssignments = assignments.filter(
    (a: any) => cid === a.course && a._id === assignmentID
  );
  const dispatch = useDispatch();
  const [assignment, setAssignment] = useState(
    possibleAssignments.length >= 1
      ? possibleAssignments[0]
      : {
          // default values if no assignment is found
          title: "",
          description: "",
          points: "",
          "available date": "",
          "due date": "",
          _id: uuidv4(),
        }
  );
  const isUpdatingAssignment: boolean = !!possibleAssignments.find((a: any) => {
    return a._id === assignment._id;
  });
  const navigate = useNavigate();
  return (
    <div id="wd-assignments-editor">
      <FormGroup className="mb-3" controlId="wd-name">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl
          placeholder="Assignment Name"
          value={assignment.title}
          onChange={(e) =>
            setAssignment({
              ...assignment,
              title: e.target.value,
            })
          }
        />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-description">
        <FormControl
          as="textarea"
          placeholder="Assignment Description"
          value={assignment.description}
          onChange={(e) =>
            setAssignment({
              ...assignment,
              description: e.target.value,
            })
          }
        />
      </FormGroup>
      <Row>
        <Col xs={6}>
          <FormGroup className="mb-3 float-end" controlId="wd-points">
            <FormLabel>Points</FormLabel>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup className="mb-3" controlId="wd-points">
            <FormControl
              value={assignment.points}
              type="number"
              onChange={(e) =>
                setAssignment({
                  ...assignment,
                  points: e.target.value,
                })
              }
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <FormGroup className="mb-3 float-end" controlId="wd-group">
            <FormLabel>Assignment Group</FormLabel>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup className="mb-3" controlId="wd-group">
            <FormSelect>
              <option>ASSIGNMENTS</option>
            </FormSelect>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <FormGroup className="mb-3 float-end" controlId="wd-grade-as">
            <FormLabel>Display Grade as</FormLabel>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup className="mb-3" controlId="wd-grade-as">
            <FormSelect>
              <option>Percent</option>
            </FormSelect>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <FormGroup className="mb-3 float-end" controlId="wd-submission-type">
            <FormLabel>Submission Type</FormLabel>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup className="mb-3" controlId="wd-submission-type">
            <Card className="p-3">
              <Card.Text>
                <FormSelect>
                  <option>Online</option>
                </FormSelect>
              </Card.Text>
              <Card.Text>
                <b>Online Entry Options</b>
              </Card.Text>
              <Card.Text>
                <Form.Check label="Text Entry" />
              </Card.Text>
              <Card.Text>
                <Form.Check label="Website URL" />
              </Card.Text>
              <Card.Text>
                <Form.Check label="Media Recording" />
              </Card.Text>
              <Card.Text>
                <Form.Check label="Student Annotation" />
              </Card.Text>
              <Card.Text>
                <Form.Check label="File Uploads" />
              </Card.Text>
            </Card>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <FormGroup className="mb-3 float-end" controlId="wd-assign-to">
            <FormLabel>Assign</FormLabel>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup className="mb-3" controlId="wd-assign-to">
            <Card className="p-3">
              <Card.Text>
                <b>Assign To</b>
              </Card.Text>
              <Card.Text>
                <FormControl placeholder="Assignment Name" />
              </Card.Text>
              <Card.Text>
                <b>Due</b>
              </Card.Text>
              <Card.Text>
                <FormControl
                  placeholder="Assignment Name"
                  type="date"
                  onChange={(e) =>
                    setAssignment({
                      ...assignment,
                      "due date": e.target.value,
                    })
                  }
                />
              </Card.Text>
              <Row>
                <Col>
                  <Card.Text>
                    <b>Available From</b>
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <b>Until</b>
                  </Card.Text>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Card.Text>
                    <FormControl
                      placeholder="Assignment Name"
                      value={assignment["available date"]}
                      type="date"
                      onChange={(e) =>
                        setAssignment({
                          ...assignment,
                          "available date": e.target.value,
                        })
                      }
                    />
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <FormControl
                      placeholder="Assignment Name"
                      value={assignment["due date"]}
                      type="date"
                    />
                  </Card.Text>
                </Col>
              </Row>
            </Card>
          </FormGroup>
        </Col>
      </Row>
      <br />
      <hr />
      <div id="wd-assignments-editor-final-buttons">
        <Button variant="secondary" className="rounded-0 me-2 float-end">
          Cancel
        </Button>
        <Button
          variant="danger"
          className="rounded-0 me-2 float-end"
          onClick={() => {
            isUpdatingAssignment
              ? dispatch(updateAssignment(assignment))
              : dispatch(addAssignment(assignment));
            navigate(`/Kambaz/Courses/${cid}/Assignments`);
            console.log(db.assignments);
          }}
        >
          Save
        </Button>
      </div>
      <br />
    </div>
  );
}
