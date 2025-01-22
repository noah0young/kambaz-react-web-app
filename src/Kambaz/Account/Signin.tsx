import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin">
      <h3>Sign in</h3>

      {/* Username and password inputs */}
      <label htmlFor="wd-username">Username: </label>
      <input id="wd-username" type="string" placeholder="username here" />
      <br />
      <label htmlFor="wd-passowrd">Password: </label>
      <input id="wd-passowrd" type="password" placeholder="password here" />

      {/* Submission button + links */}
      <br />
      <Link to="/Kambaz/Dashboard" id="wd-signin-btn">
        <button>Sign in</button>
      </Link>
      <br />
      <Link to="/Kambaz/Account/Signup" id="wd-signup-link">
        Sign up
      </Link>
    </div>
  );
}
