import React from "react";
import NavBar1 from "../../Components/NavBar/NavBar1";
import { Link } from 'react-router-dom';
import mailimg from "../Homepage/images/mailimg.png"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const ContactUs = () => {
  return (
    <div>
      <NavBar1 />
      <h1
        className="text-center border border-1 py-4  shadow p-4 mt-3 mb-5 bg-body roundeds"
        style={{ letterSpacing: 2 }}
      >
        Have Some Questions?
        <img
          className="img-fluid"
          src={mailimg}
          style={{
            width: "50px",
            height: "60px",
            position: "absolute",
            // marginTop: "150px",
          }}
        />
      </h1>
      </div>
  );
};

export default ContactUs;
