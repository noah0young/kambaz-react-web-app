import Modules from "./Modules";
import Status from "./Status";

export default function Home() {
  return (
    <div>
      <h2>Course 1234</h2> <hr />
      <table>
        <tr>
          <td valign="top">
            <Modules />
          </td>
          <td valign="top">
            <Status />
          </td>
        </tr>
      </table>
    </div>
  );
}
