import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  courses: courses,
};
const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addNewCourse: (state, { payload: course }) => {
      console.log("Got course = " + course.name);
      const newCourse: any = {
        _id: uuidv4(),
        name: course.name,
        number: course.number,
        startDate: course.startDate,
        endDate: course.endDate,
        description: course.description,
      };
      state.courses = [...state.courses, newCourse] as any;
      console.log(state.courses);
    },
    deleteCourse: (state, { payload: moduleId }) => {
      state.courses = state.courses.filter((m: any) => m._id !== moduleId);
    },
    updateCourse: (state, { payload: module }) => {
      state.courses = state.courses.map((m: any) =>
        m._id === module._id ? module : m
      ) as any;
    },
    editCourse: (state, { payload: moduleId }) => {
      state.courses = state.courses.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      ) as any;
    },
  },
});
export const { addNewCourse, deleteCourse, updateCourse, editCourse } =
  coursesSlice.actions;
export default coursesSlice.reducer;
