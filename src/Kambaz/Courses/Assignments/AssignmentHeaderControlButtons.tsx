import { IoEllipsisVertical } from "react-icons/io5";
import { BsPlus } from "react-icons/bs";
import { Badge } from "react-bootstrap";

export default function AssignmentHeaderControlButtons() {
  return (
    <div className="float-end">
      <Badge className="bg-white text-black">40% of Total</Badge>
      <BsPlus
        className="position-relative me-2 fs-2"
        style={{ bottom: "1px" }}
      />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
