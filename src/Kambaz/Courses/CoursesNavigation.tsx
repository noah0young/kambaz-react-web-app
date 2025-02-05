import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function CoursesNavigation() {
  return (
    <div>
      <ListGroup className="rounded-0 wd-secondary-nav-list">
        <ListGroup.Item
          className="active text-black border-0"
          as={Link}
          to="/Kambaz/Courses/1234/Home"
        >
          Home
        </ListGroup.Item>
        <ListGroup.Item
          className="text-danger bg-white border-0"
          as={Link}
          to="/Kambaz/Courses/1234/Modules"
        >
          Modules
        </ListGroup.Item>
        <ListGroup.Item
          className="text-danger bg-white border-0"
          as={Link}
          to="/Kambaz/Courses/1234/Assignments"
        >
          Assignments
        </ListGroup.Item>
        <ListGroup.Item
          className="text-danger bg-white border-0"
          as={Link}
          to="/Kambaz/Courses/1234/Piazza"
        >
          Piazza
        </ListGroup.Item>
        <ListGroup.Item
          className="text-danger bg-white border-0"
          as={Link}
          to="/Kambaz/Courses/1234/People"
        >
          People
        </ListGroup.Item>
        <ListGroup.Item
          className="text-danger bg-white border-0"
          as={Link}
          to="/Kambaz/Courses/1234/Grades"
        >
          Grades
        </ListGroup.Item>
        <ListGroup.Item
          className="text-danger bg-white border-0"
          as={Link}
          to="/Kambaz/Courses/1234/Zoom"
        >
          Zoom
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
