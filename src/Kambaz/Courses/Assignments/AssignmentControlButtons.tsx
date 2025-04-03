import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaRegTrashAlt } from "react-icons/fa";

export default function AssignmentControlButtons({
  assignment,
  removeModule,
}: {
  assignment: any;
  removeModule: (id: string) => void;
}) {
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaRegTrashAlt onClick={() => removeModule(assignment._id)} />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
