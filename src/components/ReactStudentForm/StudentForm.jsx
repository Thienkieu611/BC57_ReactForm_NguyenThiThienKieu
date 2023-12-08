import React, { Component } from "react";
import { connect } from "react-redux";
import { handelChangeInputAction } from "../../redux/reducers/valuesReducer";
import { addStudentAction } from "../../redux/reducers/arrStudentReducer";

export class StudentForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     valuesState: {
  //       id: "",
  //       name: "",
  //       phone: "",
  //       email: "",
  //     },
  //   };
  // }
  // static getDerivedStateFromProps(newProps, currentState) {
  //   if (newProps.studentEditState.id !== currentState.valuesState.id) {
  //     currentState.valuesState = { ...newProps.studentEditState };
  //   }

  //   return currentState.valuesState;
  // }

  render() {
    let {
      valuesState,
      errorState,
      isSubmit,
      arrStudentState,
      studentEditState,
    } = this.props;
    //let { id, name, phone, email } = this.props.studentEditState;
    console.log(studentEditState.id);

    //console.log("err", studentEditState);
    return (
      <div className=" mt-5">
        <form className="card">
          <div className="card-header bg-dark text-white h4 p-3">
            Thông tin sinh viên
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="id">Mã sinh viên</label>
                  <input
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                    value={studentEditState.id}
                    onInput={(e) => {
                      const { id, value } = e.target;
                      const action = handelChangeInputAction({
                        id: id,
                        value: value,
                      });

                      this.props.dispatch(action);
                    }}
                  />
                  <p className="text text-danger">{errorState.id}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone">Số điện thoại</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={studentEditState.phone}
                    onInput={(e) => {
                      const { id, value } = e.target;
                      const action = handelChangeInputAction({
                        id: id,
                        value: value,
                      });

                      this.props.dispatch(action);
                    }}
                  />
                  <p className="text text-danger">{errorState.phone}</p>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label htmlFor="name">Họ tên</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={studentEditState.name}
                    onInput={(e) => {
                      const { id, value } = e.target;
                      const action = handelChangeInputAction({
                        id: id,
                        value: value,
                      });

                      this.props.dispatch(action);
                    }}
                  />
                  <p className="text text-danger">{errorState.name}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={studentEditState.email}
                    onInput={(e) => {
                      const { id, value } = e.target;
                      const action = handelChangeInputAction({
                        id: id,
                        value: value,
                      });

                      this.props.dispatch(action);
                    }}
                  />
                  <p className="text text-danger">{errorState.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer p-3">
            <button
              disabled={!isSubmit}
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault();
                const action = addStudentAction(valuesState);
                this.props.dispatch(action);
              }}
            >
              Thêm sinh viên
            </button>
            <button className="btn btn-danger mx-2">Cập nhật sinh viên</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  valuesState: state.valuesState.values,
  errorState: state.valuesState.errors,
  isSubmit: state.valuesState.isSubmit,
  arrStudentState: state.arrStudentState.arrStudent,
  studentEditState: state.arrStudentState.studentEdit,
});

export default connect(mapStateToProps)(StudentForm);
