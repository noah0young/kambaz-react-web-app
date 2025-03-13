import {
  Navigate,
  Route,
  Routes,
  useParams,
  useLocation,
} from "react-router-dom";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./CoursesNavigation";
import Assignments from "./Assignments";
import AssignmentsEditor from "./Assignments/Editor";
import { GiHamburgerMenu } from "react-icons/gi";
import People from "../People/People";
import { Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div>
      <h2 className="text-danger">
        <GiHamburgerMenu className="me-3" />
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <Row>
        <Col className="d-none d-md-flex" md={2}>
          <CoursesNavigation />
        </Col>
        <Col className="flex-fill" md={10}>
          <Routes>
            <Route path="" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home cid={cid} />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route
              path="Assignments/:assignmentID"
              element={currentUser.role === "FACULTY" && <AssignmentsEditor />}
            />
            <Route path="Quizzes" element={<h3>Quizzes</h3>} />
            <Route path="Grades" element={<h3>Grades</h3>} />
            <Route path="Zoom" element={<h3>Zoom</h3>} />
            <Route path="People" element={<People />} />
            <Route path="Piazza" element={<h3>Piazza</h3>} />
          </Routes>
        </Col>
      </Row>
    </div>
  );
}
