import { Form } from "react-bootstrap";

export default function AssignmentsEditor() {
  return (
    <div id="wd-assignments-editor">
      <Form.Control id="wd-username" placeholder="username" className="mb-2" />
      <label htmlFor="wd-name">Assignment Name</label>
      <br />
      <input id="wd-name" placeholder="Assignment Name" />
      <br />
      <textarea
        id="wd-description"
        placeholder="Assignment Description"
      ></textarea>
      <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option>ASSIGNMENTS</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option>Percent</option>
            </select>
          </td>
        </tr>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option>Online</option>
            </select>
            <br />
            <label>Online Entry Options</label>
            <div>
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div>
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div>
              <input type="checkbox" id="wd-media-recording" />
              <label htmlFor="wd-media-recording">Media Recording</label>
            </div>
            <div>
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div>
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </td>
        </tr>
        <tr>
          <td align="right">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td>
            <label htmlFor="wd-assign-to">Assign to</label>
            <input id="wd-assign-to" value="Everyone" />
            <br />
            <label htmlFor="wd-assign-due">Due</label>
            <input id="wd-assign-due" type="date" />
            <table>
              <tr>
                <td>
                  <label htmlFor="wd-available-from">Available from</label>
                  <input id="wd-available-from" type="date" />
                </td>
                <td>
                  <label htmlFor="wd-available-until">Available from</label>
                  <input id="wd-available-until" type="date" />
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <hr />
      <div id="wd-assignments-editor-final-buttons">
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
