import { useEffect, useState } from "react";
import { Button, Card, Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard({
  course,
  courses,
  myCourses,
  setCourse,
  deleteCourse,
  updateCourse,
  addNewCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  course: any;
  courses: any;
  myCourses: any;
  setCourse: any;
  deleteCourse: any;
  updateCourse: any;
  addNewCourse: any;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const [viewingCourses, setViewingCourses] = useState<any[]>([]);
  useEffect(() => {
    setViewingCourses(enrolling ? courses : myCourses);
  }, [enrolling]);
  return (
    <div id="wd-dashboard">
      <h1 id="we-dashboard-title">Dashboard</h1>
      <button
        onClick={() => setEnrolling(!enrolling)}
        className="float-end btn btn-primary"
      >
        {enrolling ? "My Courses" : "All Courses"}
      </button>
      <hr />
      {currentUser.role === "FACULTY" && (
        <>
          <h5>New Course</h5>
          <br />
          <FormControl
            value={course.name}
            className="mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <FormControl
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
          />
          <button
            className="btn btn-primary float-end"
            id="wd-add-new-course-click"
            onClick={() =>
              addNewCourse({
                name: course.name,
                number: course.number,
                startDate: course.startDate,
                endDate: course.endDate,
                description: course.description,
              })
            }
          >
            {" "}
            Add{" "}
          </button>
          <button
            className="btn btn-warning float-end me-2"
            onClick={() => updateCourse(course)}
            id="wd-update-course-click"
          >
            Update
          </button>
        </>
      )}
      <hr />
      <h2 id="we-dashboard-published">
        Published Courses ({viewingCourses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {viewingCourses.map((course: any) => (
            <Col
              className="wd-dashboard-course"
              style={{ width: "300px" }}
              key={course._id}
            >
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    variant="top"
                    src="/images/reactjs.png"
                    width="100%"
                    height={160}
                  />
                  <Card.Body>
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {enrolling && (
                        <button
                          onClick={(event) => {
                            event.preventDefault();
                            updateEnrollment(course._id, !course.enrolled);
                          }}
                          className={`btn ${
                            course.enrolled ? "btn-danger" : "btn-success"
                          } float-end`}
                        >
                          {course.enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}

                      {course.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>
                    {currentUser.role === "FACULTY" && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}
                        className="btn btn-danger float-end"
                        id="wd-delete-course-click"
                      >
                        Delete
                      </button>
                    )}
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
