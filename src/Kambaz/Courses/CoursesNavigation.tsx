import { ListGroup } from "react-bootstrap";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CoursesNavigation() {
  const links = [
    "Home",
    "Modules",
    "Assignments",
    "Quizzes",
    "Piazza",
    "People",
    "Grades",
    "Zoom",
  ];
  const { cid } = useParams();
  const { pathname } = useLocation();
  return (
    <div>
      <ListGroup className="rounded-0 d-none d-md-block wd-secondary-nav-list position-fixed top-20 left-0 z-2 p-2">
        {links.map((linkName: string) => (
          <ListGroup.Item
            className={`border-0 ${
              pathname.includes(linkName) ? "active text-black" : "text-danger"
            }`}
            as={Link}
            to={`/Kambaz/Courses/${cid}/${linkName}`}
            key={linkName}
          >
            {linkName}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
