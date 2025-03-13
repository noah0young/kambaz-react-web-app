import { FormControl, ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import { useState } from "react";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();
  const [moduleName, setModuleName] = useState("");
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div>
      <h3>Modules</h3>
      <div>
        {currentUser.role === "FACULTY" && (
          <>
            <ModulesControls
              moduleName={moduleName}
              setModuleName={setModuleName}
              addModule={() => {
                dispatch(addModule({ name: moduleName, course: cid }));
                setModuleName("");
              }}
            />
            <br />
            <br />
            <br />
            <br />
          </>
        )}
        <ListGroup className="rounded-0" id="wd-modules">
          {modules
            .filter((module: any) => module.course === cid)
            .map((module: any) => (
              <ListGroup.Item
                className="wd-module p-0 mb-5 fs-5 border-gray"
                key={module.name}
              >
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" /> {module.name}
                  {!module.editing && module.name}
                  {module.editing && (
                    <FormControl
                      className="w-50 d-inline-block"
                      onChange={(e) =>
                        dispatch(
                          updateModule({ ...module, name: e.target.value })
                        )
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false }));
                        }
                      }}
                      defaultValue={module.name}
                    />
                  )}
                  {currentUser.role === "FACULTY" && (
                    <ModuleControlButtons
                      moduleId={module._id}
                      deleteModule={(moduleId) => {
                        dispatch(deleteModule(moduleId));
                      }}
                      editModule={(moduleId) => dispatch(editModule(moduleId))}
                    />
                  )}
                </div>
                {module.lessons && (
                  <ListGroup
                    className="wd-lessons rounded-0"
                    key={`${module.name}-lessons`}
                  >
                    {module.lessons.map((lesson: any) => (
                      <ListGroup.Item
                        className="wd-lesson p-3 ps-1"
                        key={lesson._id}
                      >
                        <BsGripVertical className="me-2 fs-3" /> {lesson.name}
                        <LessonControlButtons />
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            ))}
        </ListGroup>
      </div>
    </div>
  );
}
