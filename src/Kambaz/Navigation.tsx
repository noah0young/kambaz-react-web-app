import { ListGroup } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiBeaker } from "react-icons/hi";
import { MdOutlineHistory } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

export default function KambazNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kambaz/Dashboard", icon: BsSpeedometer2 },
    { label: "Courses", path: "/Kambaz/Courses", icon: FaChalkboardTeacher },
    { label: "Inbox", path: "/Kambaz/Inbox", icon: LuMessageCircle },
    { label: "Calendar", path: "/Kambaz/Calendar", icon: FaRegCalendarAlt },
    { label: "History", path: "/Kambaz/History", icon: MdOutlineHistory },
    { label: "Help", path: "/Kambaz/Help", icon: IoMdHelpCircle },
    { label: "Labs", path: "/Labs", icon: HiBeaker },
  ];

  return (
    <div>
      <ListGroup className="rounded-0 d-none d-md-block position-fixed bottom-0 top-0 left-0 bg-black z-2">
        <ListGroup.Item
          className="bg-black text-white border-0 text-center"
          action
          href="https://www.northeastern.edu/"
        >
          <img src="/images/NEU-Logo.svg" width="75px" />
          <br />
          Northeastern
        </ListGroup.Item>
        <ListGroup.Item
          as={Link}
          to="/Kambaz/Account"
          className={`text-center border-0 bg-black
            ${
              pathname.includes("Account")
                ? "bg-white text-danger"
                : "bg-black text-white"
            }`}
        >
          <FaUserCircle
            className={`fs-1 ${
              pathname.includes("Account") ? "text-danger" : "text-white"
            }`}
          />
          <br />
          Account
        </ListGroup.Item>
        {links.map((link) => (
          <ListGroup.Item
            key={link.path}
            as={Link}
            to={link.path}
            className={`bg-black text-center border-0
              ${
                pathname.includes(link.label)
                  ? "text-danger bg-white"
                  : "text-white bg-black"
              }`}
          >
            {link.icon({ className: "fs-1 text-danger" })}
            <br />
            {link.label}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
