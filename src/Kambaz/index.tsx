import { Navigate, Route, Routes } from "react-router-dom";
import Account from "./Account";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import "./styles.css";
import { useEffect, useState } from "react";
import ProtectedRoute from "./Account/ProtectedRoute";
import { useSelector } from "react-redux";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";

export default function Kambaz() {
  const [course, setCourse] = useState<any>({
    _id: "RS101",
    name: "Fundamentals of Time Travel 1",
    number: "TIME2500",
    startDate: "2023-01-10",
    endDate: "2020-05-15",
    department: "TIME123",
    credits: 4,
    description:
      "This course takes a novel approach to teaching time travel, where we will first change the past before analyzing the effects it has on the future.",
  });
  const [courses, setCourses] = useState<any>([]);
  const [myCourses, setMyCourses] = useState<any>([]);
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const deleteCourse = async (courseId: string) => {
    await courseClient.deleteCourse(courseId);
    setCourses(courses.filter((course: any) => course._id !== courseId));
    setMyCourses(myCourses.filter((course: any) => course._id !== courseId));
  };
  const updateCourse = async () => {
    await courseClient.updateCourse(course);
    setCourses(
      courses.map((c: any) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
    setMyCourses(
      myCourses.map((c: any) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };
  const addNewCourse = async () => {
    const newCourse = await userClient.createCourse(course);
    setCourses([...courses, newCourse]);
    setMyCourses([...myCourses, newCourse]);
  };
  const enrollCourse = async (courseID: string | undefined) => {
    if (!courseID) {
      return;
    }
    await userClient.enrollCourse(courseID);
    const containsCourse = myCourses.find(
      (course: any) => course._id === courseID
    );
    if (!containsCourse) {
      setMyCourses([
        ...myCourses,
        courses.find((course: any) => course._id === courseID),
      ]);
    }
  };
  const unenrollCourse = async (courseID: string | undefined) => {
    if (!courseID) {
      return;
    }
    await userClient.unenrollCourse(courseID);
    setMyCourses(myCourses.filter((course: any) => course._id !== courseID));
  };

  const fetchCourses = async () => {
    try {
      const courses = await userClient.allCourses();
      const myCourses = await userClient.findMyCourses();
      setCourses(courses);
      setMyCourses(myCourses);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [currentUser]);

  return (
    <Session>
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
                  <Dashboard
                    course={course}
                    setCourse={setCourse}
                    deleteCourse={deleteCourse}
                    updateCourse={updateCourse}
                    addNewCourse={addNewCourse}
                    enroll={enrollCourse}
                    unenroll={unenrollCourse}
                    courses={courses}
                    myCourses={myCourses}
                  />
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
    </Session>
  );
}
