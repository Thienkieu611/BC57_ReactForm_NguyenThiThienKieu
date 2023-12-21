import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {
    id: "",
    name: "",
    phone: "",
    email: "",
  },
  errors: {
    id: "",
    name: "",
    phone: "",
    email: "",
  },
  isSubmit: false,
  arrStudent: [
    {
      id: "52000845",
      name: "Nguyễn Thị Thiên Kiều",
      phone: "0978421609",
      email: "thienkieu611@gmail.com",
    },
    {
      id: "12345678",
      name: "Nguyễn Quốc Bảo",
      phone: "0956879273",
      email: "quocbao@gmail.com",
    },
  ],
  studentEdit: {
    id: "",
    name: "",
    phone: "",
    email: "",
  },
  arrStudentBackup: [
    {
      id: "52000845",
      name: "Nguyễn Thị Thiên Kiều",
      phone: "0978421609",
      email: "thienkieu611@gmail.com",
    },
    {
      id: "12345678",
      name: "Nguyễn Quốc Bảo",
      phone: "0956879273",
      email: "quocbao@gmail.com",
    },
  ],
};

const studentReducer = createSlice({
  name: "studentReducer",
  initialState,
  reducers: {
    handelChangeInputAction: (state, action) => {
      //xử lý giá trị values
      const { id, value } = action.payload;
      let newValues = { ...state.values };
      newValues[id] = value;
      state.values = newValues;

      //xử lý errors
      let newErrors = { ...state.errors };
      let messErrors = "";
      //check empty
      if (newValues[id] === "") {
        messErrors = `${id} canbe not blank !`;
      } else {
        if (id) {
          switch (id) {
            //check mã sinh viên
            case "id":
              {
                let regexID = /^[0-9]{8}$/;
                if (!regexID.test(newValues[id])) {
                  messErrors = "Mã sinh viên phải là 8 chữ số !";
                }
              }
              break;
            //check số điện thoại
            case "phone":
              {
                let regexPhone = /^0\d{9}$/;
                if (!regexPhone.test(newValues[id])) {
                  messErrors = "Số điện thoại phải là 10 chữ số !";
                }
              }
              break;
            //check email
            case "email":
              {
                let regexEmail =
                  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
                if (!regexEmail.test(newValues[id])) {
                  messErrors = "Email chưa đúng định dạng !";
                }
              }
              break;

            default:
              break;
          }
        }
      }
      newErrors[id] = messErrors;
      state.errors = newErrors;
      //console.log(newErrors);

      //xử lý nút submit
      let valid = true;
      for (let key in newErrors) {
        if (newErrors[key] !== "") {
          valid = false;
          break;
        }
      }
      for (let key in newValues) {
        if (newValues[key] === "") {
          valid = false;
          break;
        }
      }
      state.isSubmit = valid;
    },
    addStudentAction: (state, action) => {
      let newStudent = action.payload;
      state.arrStudent.push({ ...newStudent });
      state.arrStudentBackup = [...state.arrStudent];
      //console.log(state.arrStudent);
    },

    deleteStudentAction: (state, action) => {
      state.arrStudent = state.arrStudent.filter(
        (stu) => stu.id !== action.payload
      );
      state.arrStudentBackup = [...state.arrStudent];
    },
    editStudentAction: (state, action) => {
      state.values = action.payload;
      console.log(state.studentEdit);
    },
    updateStudentAction: (state, action) => {
      const stuUpdate = state.arrStudent.find(
        (stuUpdate) => stuUpdate.id === action.payload.id
      );

      //nếu có thì cập nhật không thì add mới
      if (stuUpdate) {
        state.arrStudent = state.arrStudent.map((stu) =>
          stu.id === action.payload.id ? { ...stu, ...action.payload } : stu
        );
        state.arrStudentBackup = [...state.arrStudent];
      } else {
        state.arrStudent.push({ ...action.payload });
        state.arrStudentBackup = [...state.arrStudent];
      }
    },
    //search qua email
    searchStudentAction: (state, action) => {
      let keyword = action.payload.toLowerCase();

      if (keyword === "") {
        state.arrStudent = [...state.arrStudentBackup];
      } else {
        const searchResult = state.arrStudent.filter((stu) => {
          return stu.email.toLowerCase().includes(keyword);
        });

        state.arrStudent = [...searchResult];
      }
    },
  },
});

export const {
  handelChangeInputAction,
  addStudentAction,
  clearFormAction,
  deleteStudentAction,
  editStudentAction,
  updateStudentAction,
  searchStudentAction,
} = studentReducer.actions;

export default studentReducer.reducer;
