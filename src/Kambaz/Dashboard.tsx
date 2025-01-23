import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="we-dashboard-title">Dashboard</h1> <hr />
      <h2 id="we-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashoard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kambaz/Courses/1234/Home"
          >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>

        {/* Copies of the first course */}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kambaz/Courses/1235/Home"
          >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5>CS1235 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer 2
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kambaz/Courses/1235/Home"
          >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5>CS1235 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer 3
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kambaz/Courses/1236/Home"
          >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5>CS1236 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer 4
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kambaz/Courses/1237/Home"
          >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5>CS1237 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer 5
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kambaz/Courses/1238/Home"
          >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5>CS1238 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer 6
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kambaz/Courses/1239/Home"
          >
            <img src="/images/reactjs.png" width={200} />
            <div>
              <h5>CS1239 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer 7
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
