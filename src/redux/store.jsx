import { configureStore } from "@reduxjs/toolkit";
import valuesReducer from "./reducers/valuesReducer";
import arrStudentReducer from "./reducers/arrStudentReducer";

export const store = configureStore({
  reducer: {
    valuesState: valuesReducer,
    arrStudentState: arrStudentReducer,
  },
});
