import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");
  return (
    <div>
      {links.map((link) => (
        <div key={link}>
          <Link
            key={link}
            to={`/Kambaz/Account/${link}`}
            className={`list-group-item ${active("Users")} ${
              pathname.includes(link) ? "active text-black" : "text-danger"
            }`}
          >
            {link}
          </Link>
          <br />
        </div>
      ))}
      {currentUser && currentUser.role === "ADMIN" && (
        <Link
          to={`/Kambaz/Account/Users`}
          className={`list-group-item ${active("Users")} ${
            pathname.includes("Users") ? "active text-black" : "text-danger"
          }`}
        >
          Users
        </Link>
      )}
    </div>
  );
}
