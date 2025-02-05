import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form.Control
        id="wd-username"
        placeholder="Username"
        className="mb-2"
        defaultValue="alice"
      />
      <Form.Control
        id="wd-password"
        placeholder="Password"
        type="password"
        className="mb-2"
        defaultValue="123"
      />
      <Form.Control
        id="wd-first-name"
        placeholder="First Name"
        className="mb-2"
        defaultValue="Alice"
      />
      <Form.Control
        id="wd-last-name"
        placeholder="Last Name"
        className="mb-2"
        defaultValue="Wonderland"
      />
      <Form.Control id="wd-date-of-birth" type="date" className="mb-2" />
      <Form.Control
        id="wd-email"
        type="email"
        className="mb-2"
        defaultValue="alice@worldland"
      />
      <Form.Select>
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>
      <Link
        id="wd-signout-btn"
        to="/Kambaz/Account/Signin"
        className="btn btn-primary w-100 mb-2 bg-danger"
      >
        Sign out
      </Link>
    </div>
  );
}
