import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
import * as client from "./client";

export default function Signup() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signup = async () => {
    const user = await client.signup(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");
  };
  return (
    <div id="wd-signup">
      <h1>Sign up</h1>
      <Form.Control
        id="wd-username"
        placeholder="Username"
        className="mb-2"
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <Form.Control
        id="wd-password"
        placeholder="Password"
        type="password"
        className="mb-2"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <Button
        id="wd-signin-btn"
        onClick={signup}
        className="btn btn-primary w-100 mb-2 bg-danger"
      >
        Sign up
      </Button>

      <br />
      <Link to="/Kambaz/Account/Signin" id="wd-signup-link">
        Sign in
      </Link>
    </div>
  );
}
