import React, { Component } from "react";
import { connect } from "react-redux";
import StudentForm from "./StudentForm";
import {
  deleteStudentAction,
  editStudentAction,
  searchStudentAction,
} from "../redux/reducers/studentReducer";

class ReactStudent extends Component {
  render() {
    let { arrStudentState, dispatch } = this.props;
    //console.log(valuesState);

    return (
      <div>
        <div className="container ">
          <h1 className="text-center mt-4">Quản lý sinh viên</h1>
          <StudentForm />
          <div className="form-group form-Search card my-5 ">
            <p className="card-top py-3 ps-3 h5 bg-dark text-white mb-0">
              Nhập vào sinh viên cần tìm kiếm
            </p>
            <input
              className="form-control card-body"
              id="txtSearch"
              placeholder="Nhập vào sinh viên cần tìm bằng email"
              onChange={(e) => {
                let keyword = e.target.value;

                const action = searchStudentAction(keyword);
                dispatch(action);
              }}
            />
          </div>

          <table className="table text-center mt-5 ">
            <thead className="table-dark">
              <tr>
                <th>Mã SV</th>
                <th>Họ tên</th>
                <th>Số điện thoại</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {arrStudentState.map((student) => {
                return (
                  <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>

                    <td>{student.phone}</td>
                    <td>{student.email}</td>

                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          const action = deleteStudentAction(student.id);
                          dispatch(action);
                        }}
                      >
                        <i className="fa fa-trash"></i>
                      </button>
                      <button
                        className="btn btn-primary mx-2"
                        onClick={() => {
                          const action = editStudentAction(student);
                          dispatch(action);
                        }}
                      >
                        <i className="fa fa-edit "></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  arrStudentState: state.studentState.arrStudent,
  studentEditState: state.studentState.studentEdit,
});

export default connect(mapStateToProps)(ReactStudent);
