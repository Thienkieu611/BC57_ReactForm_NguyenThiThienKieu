import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrStudent: [
    {
      id: "52000845",
      name: "Nguyễn Thị Thiên Kiều",
      phone: "0978421609",
      email: "thienkieu611@gmail.com",
    },
    {
      id: "12345678",
      name: "Nguyễn Thị Thiên Kiều",
      phone: "0978421609",
      email: "thienkieu611@gmail.com",
    },
  ],
  studentEdit: {
    id: "",
    name: "",
    phone: "",
    email: "",
  },
};

const arrStudentReducer = createSlice({
  name: "arrStudentReducer",
  initialState,
  reducers: {
    addStudentAction: (state, action) => {
      let newStudent = action.payload;
      state.arrStudent.push({ ...newStudent });
      console.log(state.arrStudent);
    },
    deleteStudentAction: (state, action) => {
      state.arrStudent = state.arrStudent.filter(
        (stu) => stu.id !== action.payload
      );
    },
    editStudentAction: (state, action) => {
      state.studentEdit = action.payload;
      console.log(state.studentEdit);
    },
    // updateStudentAction: (state, action) => {
    //   //find stu có id bằng stu update
    //   let stu = state.arrStudent.find((stu) => stu.id === action.payload);
    // },
  },
});

export const {
  addStudentAction,
  deleteStudentAction,
  updateStudentAction,
  editStudentAction,
} = arrStudentReducer.actions;

export default arrStudentReducer.reducer;
