import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
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
                                    <Link to="/" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">
                                        <FaFacebook />
                                    </Link>
                                    <Link to="/" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram">
                                        <FaInstagram />
                                    </Link>
                                    <Link to="/" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
                                        <FaTwitter />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg align-center footer">
                                <h5>About Us</h5>
                                    <ul>
                                        <li><Link to="/">About Us</Link></li>
                                        <li><Link to="/">Corporate Sale</Link></li>
                                        <li><Link to="/">Terms &amp; Policy</Link></li>
                                    </ul>
                        </div>
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="footer">
                                <h5 >Services</h5>
                                <div className="list">
                                    <ul>
                                        <li><Link to="/">Help</Link></li>
                                        <li><Link to="/">Support</Link></li>
                                        <li><Link to="/">Privacy Policy</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="footer">
                                <h5 >Helpful Links</h5>
                                <div className="list">
                                    <ul>
                                        <li><Link to="/">Call Centre</Link></li>
                                        <li><Link to="/">Email Us</Link></li>
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
