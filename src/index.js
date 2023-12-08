import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import ReactStudentForm from "./components/ReactStudentForm/ReactStudentForm";
// redux
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ReactStudentForm />}></Route>
        <Route path="*" element={<Navigate to="" />}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);
