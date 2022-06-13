import React, { useState } from "react";
import { BiArrowBack } from 'react-icons/bi'
import axios from '../api/axios';
import { useNavigate, Link } from 'react-router-dom';

function Profile() {
  const history = useNavigate();
  const [username, setUsername] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [is_industry, setIs_industry] = useState(false);
  const formData = new FormData();

  async function profile(e) {
    e.preventDefault();
    let formdata = {
      username: username,
      name: name,
      phone: phone,
      location: location,
      is_industry: false,
    };

    for (const [key, value] of Object.entries(formdata)) {
      formData.append(key, value);
      console.log(key, value);
    }

    let { data } = await axios.patch("profile/", formData);
    console.log("data", data);
    alert('Profile Updated Successfully')
    // localStorage.setItem("machine_info", JSON.stringify(data));
    history(`/homepagei`);
  }
  return (
    <>
      <div style={{ textAlign: "start" }}>
        <Link to="/settingsi" style={{ textDecoration: "none", color: "black" }}>
          <p style={{ fontSize: 20 }}><BiArrowBack />Settings</p>
        </Link>
      </div>
      <div className="container">
        <div className="row">
          <div className="col mt-0">
            <div className="col-sm-8 offset-sm-2">
              <h1 className='text-center border border-1   shadow p-4  mb-5 bg-body roundeds'
                style={{ color: "#172578 " }}>Edit Profile
              </h1>
              <form onSubmit={profile}>
                <label htmlFor="colFormLabel" className="col-1 mt-1 fw-bolder">
                  Username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="colFormLabel" className="col-1 mt-1 fw-bolder">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <label
                  htmlFor="colFormLabel"
                  className="col-sm-3 col-form-label mt-2 fw-bolder"
                >
                  Phone:
                </label>
                <textarea
                  type="tel"
                  className="form-control"
                  value={phone}
                  placeholder="phone"
                  onChange={(e) => setPhone(e.target.value)}
                />

                <label
                  htmlFor="colFormLabel"
                  className="col-sm-3 col-form-label mt-2 fw-bolder"
                >
                  Location:
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={location}
                  placeholder="location"
                  onChange={(e) => setLocation(e.target.value)}
                />

                <div className="col-sm-8">
                  <label fhtmlFor="colFormLabel"
                    className="col-sm-3 col-form-label mt-2 fw-bolder">
                    Industry:
                  </label>

                  <input
                    className="form-check-input mt-4" style={{ "width": "1.2rem", "height": "1.2rem" }}
                    type="checkbox"
                    value={is_industry}
                    onChange={(e) => setIs_industry(e.target.checked)}
                    id="flexCheckDefault"
                  />
                </div>

                <br />
                <button type="submit" className="btn btn-primary">
                  Update my Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
