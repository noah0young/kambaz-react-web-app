import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaRegTrashAlt } from "react-icons/fa";
import DeleteAssignmentPopup from "./DeleteAssignmentPopup";
import { useState } from "react";

export default function AssignmentControlButtons({
  assignment,
  removeModule,
}: {
  assignment: any;
  removeModule: (id: string) => void;
}) {
  const [showPopup, setShowPopup] = useState<boolean>(false);
  return (
    <div className="float-end">
      <GreenCheckmark />
      <FaRegTrashAlt onClick={() => setShowPopup(true)} />
      <IoEllipsisVertical className="fs-4" />
      <DeleteAssignmentPopup
        show={showPopup}
        handleClose={() => setShowPopup(false)}
        dialogTitle="Delete Assignment"
        deleteAssignment={() => removeModule(assignment._id)}
      />
    </div>
  );
}
