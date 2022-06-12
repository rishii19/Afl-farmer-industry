import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import AFL from './images/AFL.svg';

const NavBar1 = () => {    

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2 shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand fw-bold fs-6 " to="/">
                        <img src={AFL} alt="" id="logo" />
                    </NavLink>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-right">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                    Farmer
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/login">
                                    Industry
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contactus">
                                    Contact us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >

        </div >
    );
};

export default NavBar1;