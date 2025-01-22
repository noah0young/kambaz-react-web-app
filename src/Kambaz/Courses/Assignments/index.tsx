import { Link } from "react-router-dom";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <input placeholder="Search for Assignments" id="wd-search-assignment" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <br />
      <h2 id="wd-assignment-title">
        ASSIGNMENTS 40% of Total<button>+</button>
      </h2>
      <ul id="wd-assignment-list">
        <li className="wd-assignment-list-item">
          <div>
            <Link to="123" className="wd-assignment-link">
              A1 - ENV + HTML
            </Link>
            <br />
            <p>
              Multiple Modules | <strong>Not available until</strong> May 6 at
              12:00am | <strong>Due</strong> May 13 at 11:59pm | 100pt
            </p>
          </div>
        </li>
        {/* Duplicates of above */}
        <li className="wd-assignment-list-item">
          <div>
            <Link to="124" className="wd-assignment-link">
              A2 - CSS + BOOTSTRAP
            </Link>
            <br />
            <p>
              Multiple Modules | <strong>Not available until</strong> May 6 at
              12:00am | <strong>Due</strong> May 13 at 11:59pm | 100pt
            </p>
          </div>
        </li>
        <li className="wd-assignment-list-item">
          <div>
            <Link to="125" className="wd-assignment-link">
              A3 - JAVASCRIPT + REACT
            </Link>
            <br />
            <p>
              Multiple Modules | <strong>Not available until</strong> May 6 at
              12:00am | <strong>Due</strong> May 13 at 11:59pm | 100pt
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
