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
      email: "cybersoft@gmail.com",
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
    updateStudentAction: (state, action) => {
      //find stu có id bằng stu update
      let stuIndex = state.arrStudent.findIndex(
        (stu) => stu.id === action.payload.id
      );
      // Nếu tìm thấy sinh viên, cập nhật thông tin
      if (stuIndex !== -1) {
        state.arrStudent[stuIndex] = action.payload;
      }
    },
    searchStudentAction: (state, action) => {
      const keyword = action.payload.toLowerCase();

      const itemSearch = [...state.arrStudent];
      console.log("ban dau", itemSearch);

      let searchResults = state.arrStudent.filter((item) =>
        item.email.toLowerCase().includes(keyword)
      );

      // if (keyword.trim() !== "") {
      //   console.log("khac rong");
      //   let searchResults = state.arrStudent.filter((item) =>
      //     item.email.toLowerCase().includes(keyword)
      //   );
      //   if (searchResults.length > 0) {
      //     return { ...state, arrStudent: searchResults };
      //   }
      // } else {
      //   console.log("= rong");
      //   return { ...state, arrStudent: [...state.arrStudent] };
      // }
      return {
        ...state,
        arrStudent: searchResults,
      };

      // return state.arrStudent;
    },
  },
});

export const {
  addStudentAction,
  deleteStudentAction,
  updateStudentAction,
  editStudentAction,
  searchStudentAction,
} = arrStudentReducer.actions;

export default arrStudentReducer.reducer;
