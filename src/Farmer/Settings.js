import React, { Component } from "react";
// import Navbar from './Navbar'
import SideNavBar from "./SideNavBar";
import { Link } from "react-router-dom";
// import NewNavbar from './NewNavbar'

export class Settings extends Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        {/* <NewNavbar/> */}
        <div id="wrapper">
          <SideNavBar />
          <div className="text-right" style={{ "margin-right": "50px" }}>
            <img
              src="assets/img/settings-icon.png"
              style={{ width: "200px", "marginRight": "50px" }}
            />
          </div>

          <div className="page-content-wrapper pt-3">
            <div
              class="container-fluid pt-3"
              style={{ "padding-left": "60px" }}
            >
              <div class="row" style={{ "margin-bottom": "5px" }}>
                <div
                  class="col-4"
                  style={{ width: "334px", "max-width": "329px" }}
                >
                  <Link to="/profile">
                    {" "}
                    <button
                      onClick={(e) => {
                        console.log("Edit Profile Clicked");
                      }}
                      class="btn btn-primary btn-block btn-lg"
                      type="button"
                      style={{
                        height: "120px",
                        backgroundColor: "#172578",
                        marginLeft: "300px",
                      }}
                    >
                      <i class="fa fa-edit"></i> Edit Profile
                    </button>
                  </Link>
                </div>
              </div>

              <div class="row" style={{ "margin-bottom": "50px" }}>
                <div
                  class="col-4"
                  style={{ width: "334px", "max-width": "329px" }}
                >
                  <button
                    onClick={(e) => {
                      console.log("Security Clicked");
                    }}
                    class="btn btn-primary btn-block btn-lg"
                    type="button"
                    style={{
                      height: "120px",
                      backgroundColor: "#172578",
                      marginLeft: "300px",
                      marginTop: "200px",
                    }}
                    data-toggle="modal"
                    data-target="#changePassword"
                    data-whatever="@mdo"
                  >
                    <i class="fa fa-lock"></i> Security
                  </button>
                </div>
              </div>

              {/* open password change model */}
              <div
                class="modal fade"
                id="changePassword"
                tabindex="-1"
                role="dialog"
                aria-labelledby="changePasswordLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="changePasswordLabel">
                        Change Password
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <form>
                        <div class="form-group">
                          <label for="recipient-name" class="col-form-label">
                            Current Password:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="recipient-name"
                          />
                        </div>

                        <div class="form-group">
                          <label for="recipient-name" class="col-form-label">
                            New Password:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="recipient-name"
                          />
                        </div>

                        <div class="form-group">
                          <label for="recipient-name" class="col-form-label">
                            Confirm Password:
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            id="recipient-name"
                          />
                        </div>
                      </form>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Cancel
                      </button>
                      <button type="button" class="btn btn-primary">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div class="row mt-4">
                                <div class="col-4 text-center text-secondary d-flex justify-content-xl-center align-items-xl-center" style={{"width": "334px","max-width": "329px","marginLeft":"300px","marginTop":"50px"}}>
                                    
                                    <i class="fas fa-sun d-xl-flex align-items-xl-center mr-2" style={{"font-size": "50px"}}></i>
                                    <div class="custom-control custom-switch">
                                        <input class="custom-control-input" onChange={(e)=>{console.log('Dark Mode Theme set to ' + e.target.checked)}} type="checkbox" id="darkSwitch" />
                                        <label class="custom-control-label" for="darkSwitch"></label></div><i class="fas fa-moon d-xl-flex align-items-xl-center" style={{"font-size": "50px"}}></i></div>
                            </div> */}
            </div>
          </div>
        </div>
        <div className="text-right" style={{ "margin-right": "50px" }}>
          <img src="assets/img/AFL.jpg" style={{ width: "108px" }} />
        </div>
      </div>
    );
  }
}

export default Settings;
