import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  return (
    <div>
      {links.map((link) => (
        <>
          <Link to={`/Kambaz/Account/${link}`}>{link}</Link>
          <br />
        </>
      ))}
    </div>
  );
}
