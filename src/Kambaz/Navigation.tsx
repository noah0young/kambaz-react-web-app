import { Link } from "react-router-dom";

export default function KambazNavigation() {
  return (
    <div>
      <Link to="/Kambaz/Account">Signin</Link>
      <br />
      <Link to="/Kambaz/Dashboard">Dashboard</Link>
      <br />
      <Link to="/Kambaz/Courses">Courses</Link>
      <br />
      <Link to="/Kambaz/Inbox">Inbox</Link>
      <br />
      <Link to="/Kambaz/Calendar">Calendar</Link>
      <br />
      <Link to="/Kambaz/History">History</Link>
      <br />
      <Link to="/Kambaz/Help">Help</Link>
    </div>
  );
}
