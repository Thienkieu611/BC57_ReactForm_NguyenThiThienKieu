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
};

const valuesReducer = createSlice({
  name: "valuesReducer",
  initialState,
  reducers: {
    handelChangeInputAction: (state, action) => {
      const { id, value } = action.payload;
      //xử lý giá trị values
      let newValues = { ...state.values };
      newValues[id] = value;
      state.values = newValues;
      console.log(newValues);

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
      console.log(newErrors);

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
  },
});

export const { handelChangeInputAction, handleSubmitAction } =
  valuesReducer.actions;

export default valuesReducer.reducer;
