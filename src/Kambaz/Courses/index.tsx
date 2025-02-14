import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Modules from "./Modules";
import CoursesNavigation from "./CoursesNavigation";
import Assignments from "./Assignments";
import AssignmentsEditor from "./Assignments/Editor";
import { GiHamburgerMenu } from "react-icons/gi";
import People from "../People/People";

export default function Courses() {
  return (
    <div>
      <h2 className="text-danger">
        <GiHamburgerMenu className="me-3" />
        Courses
      </h2>
      <div className="d-flex">
        <CoursesNavigation />
      </div>
      <div className="flex-fill">
        <Routes>
          <Route path="" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route
            path="Assignments/:assignmentID"
            element={<AssignmentsEditor />}
          />
          <Route path="Quizzes" element={<h3>Quizzes</h3>} />
          <Route path="Grades" element={<h3>Grades</h3>} />
          <Route path="Zoom" element={<h3>Zoom</h3>} />
          <Route path="People" element={<People />} />
          <Route path="Piazza" element={<h3>Piazza</h3>} />
        </Routes>
      </div>
    </div>
  );
}
