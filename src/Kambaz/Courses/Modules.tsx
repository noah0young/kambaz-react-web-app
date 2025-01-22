export default function Home() {
  return (
    <div>
      <h3>Modules</h3>
      <button>Expand All</button>
      <button>View Progress</button>
      <select>
        <option>Publish All</option>
      </select>
      <button>+ Module</button> {/* To create new modules */}
      <ul>
        <li>
          <div>
            <h4>Module 1</h4>
            <ul>
              <li>Lesson 1</li>
              <li>Lesson 2</li>
              <li>Lesson 3</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h4>Module 2</h4>
            <ul>
              <li>Lesson 1</li>
              <li>Lesson 2</li>
              <li>Lesson 3</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h4>Module 3</h4>
            <ul>
              <li>Lesson 1</li>
              <li>Lesson 2</li>
              <li>Lesson 3</li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
