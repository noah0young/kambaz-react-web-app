import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { deleteAssignment } from "./reducer";

export default function AssignmentControlButtons({
  assignment,
}: {
  assignment;
}) {
  const { cid } = useParams();
  const { assignments } = useSelector((state: any) => state.assignmentReducer);
  const foundAssignments = assignments.filter((a) => cid === a.course);
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
