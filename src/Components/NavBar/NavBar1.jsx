import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './NavBar.css';
import AFL from './images/AFL.svg';

const NavBar1 = () => {
    const history = useNavigate();
    const USER = JSON.parse(localStorage.getItem('user'));

    // function logout() {
    //     localStorage.clear();
    //     history('/')
    // }

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
                            {/* <li className="nav-item">
                                            <NavLink className="nav-link" to="/product">
                                                Products
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink className="nav-link" to="/aboutus">
                                                About
                                            </NavLink>
                                        </li> */}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/farmer">
                                    Farmer
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/industry">
                                    Industry
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contact us
                                </NavLink>
                            </li>
                            {/* <ul className="navbar-nav">
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    CHANGE PROFILE
                                                </a>
                                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                                    <li><NavLink to="/farmer" className="dropdown-item">Farmer </NavLink></li>
                                                    <li><NavLink to="/industry" className="dropdown-item">Industry</NavLink></li>
                                                </ul>
                                            </li>
                                        </ul> */}
                        </ul>
                    </div>
                </div>
            </nav >

        </div >
    );
};

export default NavBar1;