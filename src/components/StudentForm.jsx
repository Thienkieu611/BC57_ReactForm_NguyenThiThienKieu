import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addStudentAction,
  handelChangeInputAction,
  updateStudentAction,
} from "../redux/reducers/studentReducer";

class StudentForm extends Component {
  handelUpdate = (e) => {
    e.preventDefault();
    console.log(this.props.valuesState.id);

    const action = updateStudentAction(this.props.valuesState);
    this.props.dispatch(action);
  };

  render() {
    let { valuesState, errorsState, isSubmitState, dispatch } = this.props;

    //console.log(this.state.valuesState);
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
                    value={valuesState.id}
                    onChange={(e) => {
                      const { id, value } = e.target;
                      //const tag = e.target;
                      const action = handelChangeInputAction({
                        id: id,
                        value: value,
                      });
                      dispatch(action);
                    }}
                  />
                  <p className="text text-danger">{errorsState.id}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="phone">Số điện thoại</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={valuesState.phone}
                    onChange={(e) => {
                      const { id, value } = e.target;
                      //const tag = e.target;
                      const action = handelChangeInputAction({
                        id: id,
                        value: value,
                      });
                      dispatch(action);
                    }}
                  />
                  <p className="text text-danger">{errorsState.phone}</p>
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
                    value={valuesState.name}
                    onChange={(e) => {
                      const { id, value } = e.target;
                      //const tag = e.target;
                      const action = handelChangeInputAction({
                        id: id,
                        value: value,
                      });
                      dispatch(action);
                    }}
                  />
                  <p className="text text-danger">{errorsState.name}</p>
                </div>
                <div className="mb-3">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={valuesState.email}
                    onChange={(e) => {
                      const { id, value } = e.target;
                      //const tag = e.target;
                      const action = handelChangeInputAction({
                        id: id,
                        value: value,
                      });
                      dispatch(action);
                    }}
                  />
                  <p className="text text-danger">{errorsState.email}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer p-3">
            <button
              disabled={!isSubmitState}
              className="btn btn-success"
              onClick={(e) => {
                e.preventDefault();

                const action = addStudentAction(valuesState);
                dispatch(action);
              }}
            >
              Thêm sinh viên
            </button>
            <button
              disabled={!isSubmitState}
              className="btn btn-danger mx-2"
              onClick={this.handelUpdate}
            >
              Cập nhật sinh viên
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  valuesState: state.studentState.values,
  errorsState: state.studentState.errors,
  isSubmitState: state.studentState.isSubmit,
  studentEditState: state.studentState.studentEdit,
  arrStudentState: state.studentState.arrStudent,
});

export default connect(mapStateToProps)(StudentForm);
