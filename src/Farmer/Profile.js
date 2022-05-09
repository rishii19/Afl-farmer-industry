import React, { Component } from 'react'

export class Profile extends Component {
  render() {
    return (
        <div style={{background: 'rgb(248,248,255)'}}>
          <div className="container-fluid" style={{"height": "100%"}}>
        <div className="row">
            <div className="col text-center" style={{"margin-top": "103px"}}>
                <div className='mb-5'><img className="img-fluid border rounded-circle shadow" src="assets/img/User_New.png"/></div><button className="btn btn-primary" type="button">Change Image</button></div>
            <div className="col-lg-5 col-xl-5" style={{"background": "#ffffff","min-height": "888px"}}>
                <h2 className="text-center mb-5" style={{"margin-top": "57px"}}>Edit Profile</h2>
                <form className="text-center" style={{"padding": "68px"}}>
                    <div className="form-group text-left"><label>User Name</label><input className="form-control" type="text" style={{"border-radius":"25px"}} name="UserName" placeholder="UserName"/></div>
                    <div className="form-group text-left"><label>Email</label><input className="form-control" type="text" style={{"border-radius":"25px"}} name="Email" placeholder="Email"/></div>
                    <div className="form-group text-left"><label>Mobile</label><input className="form-control" type="text" style={{"border-radius":"25px"}} name="Mobile" placeholder="Mobile"/></div>
                    <div className="form-group text-left"><label>Sign-up as</label><select className="form-control" style={{"border-radius":"25px"}}><optgroup label="Profile Type"><option value="" selected="">Farmer</option><option value="">Industrialist</option></optgroup></select></div>
                    <br></br>
                    <button className="btn btn-primary btn-block mb-5" type="button" >Create My Account</button>
                </form>
                <div>
                    {/* <h6>Or Sign-up with</h6>
                    <div className="text-center"><button className="btn btn-primary m-5" type="button" style={{"border-radius":"25px"}}>Save</button><button className="btn btn-primary m-5" type="button" style={{"border-radius":"25px"}}>Edit&nbsp;<i className="fa fa-pencil" style={{"margin-left": "8px"}}></i></button>
                        <button className="btn btn-primary m-5" type="button" style={{"border-radius":"25px"}}>Share&nbsp;<i className="fa fa-share-alt ml-2"></i></button>
                    </div> */}
                    <div className="text-right" style={{"margin-right": "50px"}}><img src="assets/img/AFL.jpg" style={{"width": "108px"}}/></div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default Profile