import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { login } from "../actions/userActions";
// import { useNavigate } from "react-router-dom";



const LoginFarmer = () => {

  // const navigate= useNavigate();
  const [inputValues,setInoutValues]= React.useState({
    username:"",
    password:""
  })

  const handleChange = (e) =>{
    const {name,value} = e.target;
    setInoutValues({
      ...inputValues,
      [name]:value
    })
  }

  const handleLogin = () =>{
      const res = login(inputValues)
      // console.log(res)

      res.then(function(result){
        console.log(result.data);
      });
      // navigate('./homepagefarmer');
  }
  async function login() {
    console.warn("data", username, password)
    let item = { username, password }
    console.warn(item)
    let result = await fetch("http://localhost:8000/api/login/", {
        method: 'POST',
        headers: {

            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(item)
    });
    result = await result.json();
    console.warn("result", result)
    if (result.id) {
        localStorage.setItem('user', JSON.stringify(result));
        history("/homepagei")
    }
    else {
        alert("Please enter correct details")
    }
}



  return (
    <div style={{ background: "rgb(248,248,255)" }}>
      <div className="container-fluid" style={{ height: "100%" }}>
        <div className="row">
          <div className="col text-center align-self-center">
            <img className="img-fluid" src="assets/img/LoginAFL.png" style={{ width: "300px", height: "300px" }} />
          </div>
          <div
            className="col-lg-5 col-xl-5"
            style={{ background: "#ffffff", "min-height": "888px" }}
          >
            <h2
              className="text-center"
              style={{ "margin-top": "126px", "margin-bottom": "83px" }}
            >
              Login
            </h2>
            <form className="text-center" style={{ padding: "68px" }} >
              <div className="form-group">
                <input
                  className="form-control"
                  value={inputValues.email}
                  onChange={handleChange}
                  type="text"
                  style={{ "border-radius": "25px" }}
                  name="username"
                  placeholder="Username"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  type="password"
                  onChange={handleChange}
                  value={inputValues.password}
                  style={{ "border-radius": "25px" }}
                  name="password"
                  placeholder="Password"
                />
              </div>
              <br></br>
              <Link to="/homepagefarmer">
                <button
                  className="btn btn-info btn-block"
                  type="button"
                  onClick={login}
                >
                  {" "}
                  Login
                </button>
                </Link>
              <br></br>
              <br></br>
              <Link to="/signupfarmer">
                <button
                  className="btn btn-primary btn-block mb-5"
                  type="button"
                  onClick={() => {
                    console.log("Signup Button Clicked");
                  }}
                >
                  Sign Up
                </button></Link>
            </form>
            <div>
              {/* <h6>Or Sign-in with</h6>
              <div>
                <img
                  style={{ margin: "23px", width: "100px" }}
                  src="assets/img/google.jpg"
                />
                <img
                  style={{ margin: "23px", width: "100px" }}
                  src="assets/img/Facebook.jpg"
                />
              </div> */}
              <div className="text-right" style={{ "margin-right": "50px" }}>
                <img src="assets/img/AFL.jpg" style={{ width: "108px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default LoginFarmer;
