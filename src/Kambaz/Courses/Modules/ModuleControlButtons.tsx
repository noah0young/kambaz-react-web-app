import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { BsPlus } from "react-icons/bs";

export default function ModuleControlButtons() {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <BsPlus
        className="position-relative me-2 fs-2"
        style={{ bottom: "1px" }}
      />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
