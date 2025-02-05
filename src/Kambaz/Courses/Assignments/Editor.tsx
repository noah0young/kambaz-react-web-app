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

export default function AssignmentsEditor() {
  return (
    <div id="wd-assignments-editor">
      <FormGroup className="mb-3" controlId="wd-name">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl placeholder="Assignment Name" />
      </FormGroup>
      <FormGroup className="mb-3" controlId="wd-description">
        <FormControl as="textarea" placeholder="Assignment Description" />
      </FormGroup>
      <Row>
        <Col xs={6}>
          <FormGroup className="mb-3 float-end" controlId="wd-points">
            <FormLabel>Points</FormLabel>
          </FormGroup>
        </Col>
        <Col xs={6}>
          <FormGroup className="mb-3" controlId="wd-points">
            <FormControl type="number" />
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
                <FormControl placeholder="Assignment Name" type="date" />
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
                    <FormControl placeholder="Assignment Name" type="date" />
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <FormControl placeholder="Assignment Name" type="date" />
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
        <Button variant="secondary" className="rounded-0 me-2">
          Cancel
        </Button>
        <Button variant="danger" className="rounded-0 me-2">
          Save
        </Button>
      </div>
    </div>
  );
}
