import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  assignments: assignments,
};
const assignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload: assignment }) => {
      console.log("addAssignment");
      const newAssignment: any = {
        _id: uuidv4(),
        lessons: [],
        title: assignment.title,
        course: assignment.course,
        description: assignment.description,
        points: assignment.points,
        "due date": assignment["due date"],
        "available date": assignment["available date"],
      };
      state.assignments = [...state.assignments, newAssignment] as any;
    },
    deleteAssignment: (state, { payload: assignmentID }) => {
      console.log("deleteAssignment");
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentID
      );
    },
    updateAssignment: (state, { payload: assignment }) => {
      console.log("updateAssignment");
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignment._id ? assignment : a
      ) as any;
    },
    editAssignment: (state, { payload: assignmentID }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === assignmentID ? { ...a, editing: true } : a
      ) as any;
    },
  },
});
export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} = assignmentSlice.actions;
export default assignmentSlice.reducer;
