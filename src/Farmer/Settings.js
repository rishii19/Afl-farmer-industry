import React from "react";
import { Link } from "react-router-dom";
 
function Settings() {
  
  const ShowSettings = () => {
    return (
      <>
      <div className="page-content-wrapper pt-2">
        <div
          className="container"
          style={{ "paddingLeft": "100px"}}
        >
          <div className="row" style={{ "marginBottom": "5px" }}>
            <div className="col-4" style={{ width: "334px", "maxWidth": "329px" }}>
              <Link to="/profile">
                {" "}
                <button
                  onClick={(e) => {
                    console.log("Edit Profile Clicked");
                  }}
                  className="btn btn-primary btn-block btn-lg"
                  type="button"
                  style={{
                    width:"300px",
                    height: "120px",
                    backgroundColor: "#172578",
                    // marginLeft: "350px",
                  }}
                >
                  <i className="fa fa-edit"></i> Edit Profile
                </button>
              </Link>
            </div>
          </div>

          <div className="row" style={{ "marginBottom": "50px" }}>
            <div className="col-4" style={{ width: "334px", "maxWidth": "329px" }}>
             <Link to="/changepassword">
              <button
                onClick={(e) => {
                  console.log("Security Clicked");
                }}
                className="btn btn-primary btn-block btn-lg"
                type="button"
                style={{
                  width:"300px",
                  height: "120px",
                  backgroundColor: "#172578",
                  // marginLeft: "350px",
                  marginTop: "100px",
                }}
                data-toggle="modal"
                data-target="#changePassword"
                data-whatever="@mdo"
              >
                <i className="fa fa-lock"></i> Security
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    
      </>);};
  return (
    <>
    <div className="container">
      <div className="row py-4 justify-content-evenly" >
        <h1 className='text-center border border-1 py-4  shadow p-4 mt-3 mb-5 bg-body roundeds' style={{ marginTop: 100, color: "#172578 " }}>Settings
        </h1>
        <div className="row justify-content-center ">{<ShowSettings />}</div>
      </div>
    </div>
  </>

  );
}

export default Settings;
