import React, { useState } from "react";
import axios from "../api/axios";
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate,Link } from "react-router-dom";
function changePassword() {
  const history = useNavigate();
  const [old_password, setOldPassword] = useState([]);
  const [new_password1, setNewPassword1] = useState("");
  const [new_password2, setNewPassword2] = useState("");
  const formData = new FormData();

  async function changePassword(e) {
    e.preventDefault();
    let formdata = {
      old_password: old_password,
      new_password1: new_password1,
      new_password2: new_password2,
    };

    for (const [key, value] of Object.entries(formdata)) {
      formData.append(key, value);
      console.log(key, value);
    }

    let { data } = await axios.patch("/users/change-password", formData);
    console.log("data", data);
    localStorage.setItem("change-password_info", JSON.stringify(data));
    history(`/login`);
  }
  const ShowChangePassword = () => {
    return (
      <>
        <form onSubmit={changePassword}>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">
              Current Password:
            </label>
            <input
              type="password"
              value={old_password}
              placeholder="Current Password"
              class="form-control"
              id="recipient-name"
              onChange={(e) => setOldPassword(e.target.value)}
            />
          </div>

          <div class="form-group">
            <label for="recipientname" class="col-form-label">
              New Password:
            </label>
            <input
              type="password"
              value={new_password1}
              placeholder="New Password"
              class="form-control"
              id="recipientname"
              onChange={(e) => setNewPassword1(e.target.value)}
            />
          </div>

          <div class="form-group">
            <label for="recipient_name" class="col-form-label">
              Confirm Password:
            </label>
            <input
              type="password"
              value={new_password2}
              placeholder="Confirm Password"
              class="form-control"
              id="recipient_name"
              onChange={(e) => setNewPassword2(e.target.value)}
            />
          </div>
          <br></br>
          <button
            className="btn btn-primary btn-md mt-3"
            type="submit"
          >
            {" "}
            Update
          </button>
        </form>
      </>);
  };
  return (
    <>
      <div style={{ textAlign: "start" }}>
        <Link to="/settings" style={{ textDecoration: "none", color: "black" }}>
          <p style={{ fontSize: 20 }}><BiArrowBack />Settings</p>
        </Link>
      </div>
      <div className="container">
        <div className="row py-4 justify-content-evenly" >
          <h1 className='text-center border border-1 py-4  shadow p-4 mt-3 mb-5 bg-body roundeds' style={{ color: "#172578 " }}>Change Password
          </h1>
          <div className="row justify-content-center ">{<ShowChangePassword />}</div>
        </div>
      </div>
    </>

  );
}
export default changePassword;