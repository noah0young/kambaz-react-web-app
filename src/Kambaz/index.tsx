import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import "./styles.css";
import { useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";

export default function Kambaz() {
  const { courses } = useSelector((state: any) => state.courseReducer);
  const [course, setCourse] = useState<any>({
    _id: "1234",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    description: "New Description",
  });

  return (
    <div id="wd-kambaz">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="" element={<Navigate to="Account" />} />
          <Route path="Account/*" element={<Account />} />\
          <Route
            path="Dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard course={course} setCourse={setCourse} />
              </ProtectedRoute>
            }
          />
          <Route
            path="Courses/:cid/*"
            element={
              <ProtectedRoute>
                <Courses courses={courses} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
