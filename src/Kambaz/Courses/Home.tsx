import Modules from "./Modules";
import Status from "./Status";

export default function Home() {
  return (
    <div>
      <h2>Course 1234</h2> <hr />
      <div className="flex-fill me-3">
        <Modules />
      </div>
      <div className="d-none d-xl-block">
        <Status />
      </div>
    </div>
  );
}
