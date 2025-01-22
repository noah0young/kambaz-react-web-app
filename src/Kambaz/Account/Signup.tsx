import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup">
      <h3>Sign up</h3>

      {/* Username and password inputs */}
      <label htmlFor="wd-username">Username: </label>
      <input id="wd-username" type="string" placeholder="username here" />
      <br />
      <label htmlFor="wd-passowrd">Password: </label>
      <input id="wd-passowrd" type="password" placeholder="password here" />
      <br />
      <label htmlFor="wd-confirm-passowrd">Password: </label>
      <input
        id="wd-confirm-passowrd"
        type="password"
        placeholder="confirm password"
      />
      <br />

      <Link to="/Kambaz/Account/Profile" id="wd-signup-btn">
        <button>Sign up</button>
      </Link>
      <br />
      <Link to="/Kambaz/Account/Signin" id="wd-signup-link">
        Sign in
      </Link>
    </div>
  );
}
