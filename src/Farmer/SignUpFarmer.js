import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../actions/userActions";
 

export const SignUpFarmer = () => {
  const navigate = useNavigate();
  const [inputValues, setInputValues] = React.useState({
    username: "",
    password: "",
    email: "",
    name: "",
    is_industry:false,
    phone: "",
    location: "",
    confirmPassword: "",
  });

  const [is_industry, setIs_industry] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  const handleSignUp = () => {
    const res = register(inputValues);
    res.then(function (result) {
      console.log(result.data);
    });
    navigate('/homepagefarmer');
  };

  return (
    <>
      <div className="container-fluid" style={{ height: "100%;" }}>
        <div className="row">
          <div className="col text-center">
            <img className="img-fluid" src="assets/img/Login_BG.jpg" />
          </div>
          <div
            className="col-lg-5 col-xl-5"
            style={{ background: "#ffffff", "min-height": "888px" }}
          >
            <h2
              className="text-center"
              style={{ "margin-top": "126px", "margin-bottom": "83px" }}
            >
              Create Your Account
            </h2>
            <form className="text-center" style={{ padding: "68px" }}>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  style={{ "border-radius": "25px" }}
                  value={inputValues.username}
                  onChange={handleChange}
                  name="username"
                  placeholder="UserName"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  style={{ "border-radius": "25px" }}
                  value={inputValues.name}
                  onChange={handleChange}
                  name="name"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  style={{ "border-radius": "25px" }}
                  value={inputValues.email}
                  onChange={handleChange}
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  style={{ "border-radius": "25px" }}
                  value={inputValues.password}
                  onChange={handleChange}
                  name="password"
                  placeholder="Create Password"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  style={{ "border-radius": "25px" }}
                  value={inputValues.confirmPassword}
                  onChange={handleChange}
                  name="confirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="tel"
                  style={{ "border-radius": "25px" }}
                  value={inputValues.phone}
                  onChange={handleChange}
                  name="phone"
                  placeholder="Phone No."
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="text"
                  style={{ "border-radius": "25px" }}
                  value={inputValues.location}
                  onChange={handleChange}
                  name="location"
                  placeholder="Location"
                />
              </div>
              <div className="form-group">
              <label for="colFormLabel" className="mt-3">Industry</label>
              
                <input
                  className="form-check-input"
                  type="checkbox"
                  style={{ "border-radius": "25px", "marginLeft": "20px", "marginTop": "17px" }}
                  value={inputValues.is_industry}
                  onChange={handleChange}
                  id="flexCheckDefault"
                />
              
              </div>

              {/* <Link to="/"> */}
              <button
                className="btn btn-primary btn-block mb-5"
                type="button"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
              {/* </Link> */}
              <Link to="/loginfarmer">
                <button
                  className="btn btn-info btn-block"
                  onClick={() => {
                    console.log("Login Button Clicked");
                  }}
                  type="button"
                >
                  Already Have an account .. Login
                </button>
              </Link>
            </form>
            <div>
              <div className="text-right" style={{ "margin-right": "50px" }}>
                <img src="assets/img/AFL.jpg" style={{ width: "108px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpFarmer;
