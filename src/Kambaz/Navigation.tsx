import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsSpeedometer2 } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { LuMessageCircle } from "react-icons/lu";
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiBeaker } from "react-icons/hi";
import { MdOutlineHistory } from "react-icons/md";
import { IoMdHelpCircle } from "react-icons/io";

export default function KambazNavigation() {
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
          className="bg-white text-danger border-0 text-center"
          as={Link}
          to="/Kambaz/Account"
        >
          <FaUserCircle className="fs-1" />
          <br />
          Account
        </ListGroup.Item>
        <ListGroup.Item
          className="bg-black text-white border-0 text-center"
          as={Link}
          to="/Kambaz/Dashboard"
        >
          <BsSpeedometer2 className="fs-1 text-danger" />
          <br />
          Dashboard
        </ListGroup.Item>
        <ListGroup.Item
          className="bg-black text-white border-0 text-center"
          as={Link}
          to="/Kambaz/Courses"
        >
          <FaChalkboardTeacher className="fs-1 text-danger" />
          <br />
          Courses
        </ListGroup.Item>
        <ListGroup.Item
          className="bg-black text-white border-0 text-center"
          as={Link}
          to="/Kambaz/Inbox"
        >
          <LuMessageCircle className="fs-1 text-danger" />
          <br />
          Inbox
        </ListGroup.Item>
        <ListGroup.Item
          className="bg-black text-white border-0 text-center"
          as={Link}
          to="/Kambaz/Calendar"
        >
          <FaRegCalendarAlt className="fs-1 text-danger" />
          <br />
          Calendar
        </ListGroup.Item>
        <ListGroup.Item
          className="bg-black text-white border-0 text-center"
          as={Link}
          to="/Kambaz/History"
        >
          <MdOutlineHistory className="fs-1 text-danger" />
          <br />
          History
        </ListGroup.Item>
        <ListGroup.Item
          className="bg-black text-white border-0 text-center"
          as={Link}
          to="/Kambaz/Help"
        >
          <IoMdHelpCircle className="fs-1 text-danger" />
          <br />
          Help
        </ListGroup.Item>
        <ListGroup.Item
          className="bg-black text-white border-0 text-center"
          as={Link}
          to="/Labs"
        >
          <HiBeaker className="fs-1 text-danger" />
          <br />
          Labs
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
