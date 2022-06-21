import React, { useState } from "react";
import axios from "../api/axios";
// import { BiArrowBack } from 'react-icons/bi'
import { useNavigate,Link } from "react-router-dom";
import ChangePassworditem from "./ChangePassworditem";

function changePassword() {

  const history = useNavigate();
  const formData = new FormData();

  async function changePassword(e,old_password,new_password1,new_password2) {
    e.preventDefault();
    let formdata = {
      old_password: old_password,
      new_password1: new_password1,
      new_password2: new_password2,
    };

    for (const [key, value] of Object.entries(formdata)) {
      formData.append(key, value);
    //   console.log(key, value);
    }

   await axios.patch("/users/change-password", formData)
   .then(()=>{
    alert("Password Changed Succesfully");
   }).catch((err)=>alert("Plese Fill Correct Details"))
    history(`/login`);
  }
  
  const ShowChangePassword = () => {
    return (
      <>
       <ChangePassworditem onSubmit={changePassword}/>
      </>);
  };
  return (
    <>
      {/* <div style={{ textAlign: "start" }}>
        <Link to="/settingsi" style={{ textDecoration: "none", color: "black" }}>
          <p style={{ fontSize: 20 }}><BiArrowBack />Settings</p>
        </Link>
      </div> */}
      <div className="container-fluid">
        <div className="row justify-content-evenly" >
          <h1 className='text-center border-bottom shadow-sm mb-4 bg-body rounded' style={{ color: "#172578 " }}>Change Password
          </h1>
          <div className="row justify-content-center">{<ShowChangePassword />}</div>
        </div>
      </div>
    </>

  );
}
export default changePassword;