import React from 'react'
import './Footer.css';
import { a } from 'react-router-dom';
import AFL from '../Images/AFL.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer1 = () => {
    return (
        <div>
            <footer className="footer_area section_padding_130_0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="">
                                <div className="footer-logo mb-3 mt-2">
                                    <h3 style={{ marginLeft: "20px" }}>
                                        <img src={AFL} alt=" " />
                                    </h3>
                                </div>
                                <div className="footer_social_area">
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">
                                        <FaFacebook />
                                    </a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram">
                                        <FaInstagram />
                                    </a>
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
                                        <FaTwitter />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg align-center footer">
                                <h5>About Us</h5>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Corporate Sale</a></li>
                                        <li><a href="#">Terms &amp; Policy</a></li>
                                    </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="footer">
                                <h5 >Services</h5>
                                <div className="list">
                                    <ul>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="footer">
                                <h5 >Helpful Links</h5>
                                <div className="list">
                                    <ul>
                                        <li><a href="#">Call Centre</a></li>
                                        <li><a href="#">Email Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer1
