import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";

export default function AssignmentControlButtons({
  assignment,
}: {
  assignment: any;
}) {
  const dispatch = useDispatch();
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaRegTrashAlt
        onClick={() => dispatch(deleteAssignment(assignment._id))}
      />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
