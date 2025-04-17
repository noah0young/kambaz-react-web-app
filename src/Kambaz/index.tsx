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
  const updateEnrollment = async (courseId: string, enrolled: boolean) => {
    if (enrolled) {
      await userClient.enrollIntoCourse(currentUser._id, courseId);
    } else {
      await userClient.unenrollFromCourse(currentUser._id, courseId);
    }
    setCourses(
      courses.map((course: any) => {
        if (course._id === courseId) {
          return { ...course, enrolled: enrolled };
        } else {
          return course;
        }
      })
    );
  };

  const [enrolling, setEnrolling] = useState<boolean>(false);
  const findCoursesForUser = async () => {
    try {
      const courses = await userClient.findCoursesForUser(currentUser._id);
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };
  const fetchCourses = async () => {
    try {
      const allCourses = await courseClient.fetchAllCourses();
      const enrolledCourses = await userClient.findCoursesForUser(
        currentUser._id
      );
      const courses = allCourses.map((course: any) => {
        if (enrolledCourses.find((c: any) => c._id === course._id)) {
          return { ...course, enrolled: true };
        } else {
          return course;
        }
      });
      setCourses(courses);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (enrolling) {
      fetchCourses();
    } else {
      findCoursesForUser();
    }
  }, [currentUser, enrolling]);

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
                    courses={courses}
                    myCourses={myCourses}
                    enrolling={enrolling}
                    setEnrolling={setEnrolling}
                    updateEnrollment={updateEnrollment}
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
