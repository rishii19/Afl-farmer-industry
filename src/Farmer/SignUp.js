import React, { Component } from 'react'

export class SignUp extends Component {
  render() {
    return (
      <>
          <div className="container-fluid" style={{"height": "100%;"}}>
        <div className="row">
            <div className="col text-center"><img className="img-fluid" src="assets/img/Login_BG.jpg"/></div>
            <div className="col-lg-5 col-xl-5" style={{"background": "#ffffff","min-height": "888px"}}>
                <h2 className="text-center" style={{"margin-top": "126px","margin-bottom": "83px"}}>Create Your Account</h2>
                <form className="text-center" style={{"padding": "68px"}}>
                    <div className="form-group"><input className="form-control" type="text" style={{"border-radius": "25px"}} name="UserName" placeholder="UserName"/></div>
                    <div className="form-group"><input className="form-control" type="text" style={{"border-radius": "25px"}} name="Email" placeholder="Email"/></div>
                    <div className="form-group"><input className="form-control" type="text" style={{"border-radius": "25px"}} name="PWD" placeholder="Create Password"/></div>
                    <button className="btn btn-primary btn-block mb-5" type="button" onClick={()=>{console.log('Signup Button Clicked');}} >Sign Up</button>
                    <button className="btn btn-info btn-block" onClick={()=>{console.log('Login Button Clicked');}} type="button">Already Have an account .. Login</button></form>
                <div>
                    <h6>Or Sign-up with</h6>
                    <div><img style={{"margin":"23px","width":"100px"}} src="assets/img/google.jpg"/>
                    <img style={{"margin":"23px","width":"100px"}} src="assets/img/Facebook.jpg"/></div>
                    <div className="text-right" style={{"margin-right": "50px"}}><img src="assets/img/AFL.jpg" style={{"width": "108px"}}/></div>
                </div>
            </div>
        </div>
    </div>


      </>
    )
  }
}

export default SignUp