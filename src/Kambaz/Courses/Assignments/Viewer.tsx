import { Button, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function AssignmentViewer() {
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const { cid, assignmentID } = useParams();
  const possibleAssignments = assignments.filter(
    (a: any) => cid === a.course && a._id === assignmentID
  );
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
  return (
    <Container>
      <h3 className="float-start">{assignment.title}</h3>
      <Button className="float-end bg-danger">Start Assignment</Button>
      <br className="float-none" />
      <hr />
      <p>
        <strong>Due</strong>
        {" " + assignment["due date"] + " "}
        <strong>Points</strong>
        {" " + assignment["points"] + " "}
        <strong>Available Date</strong>
        {" " + assignment["available date"] + " "}
      </p>
      <hr />
      <p>{assignment.description}</p>
    </Container>
  );
}
