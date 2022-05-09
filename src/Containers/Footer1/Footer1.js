import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
 

const Footer1 = () => {
    return (
        <div>
            <footer className="footer_area section_padding_130_0">
                <div className="container">
                    <div className="row">
                        {/* <!-- Single Widget--> */}
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="single-footer-widget section_padding_0_130">
                                {/* <!-- Footer Logo--> */}
                                <div className="footer-logo mb-3">
                                    <p> </p>
                                    {/* <!-- Copywrite Text--> */}
                                    <div className="copywrite-text mb-5"></div>
                                    <h3 style={{ marginLeft: "50px" }}>AFL</h3>
                                </div>
                                {/* <!-- Footer Social Area--> */}
                                <div className="footer_social_area">
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Facebook">
                                    <FaFacebook/>
                                    </a> 
                                    <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Instagram">
                                        <FaInstagram/>
                                        <i className="fa fa-skype"></i></a><a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="Twitter">
                                         <FaTwitter/></a></div>
                            </div>
                        </div>
                        {/* <!-- Single Widget--> */}
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="single-footer-widget section_padding_0_130">
                                <h5 className="widget-title">About Us</h5>
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Corporate Sale</a></li>
                                        <li><a href="#">Terms &amp; Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Widget--> */}
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="single-footer-widget section_padding_0_130">
                                {/* <!-- Widget Title--> */}
                                <h5 className="widget-title">Services</h5>
                                {/* <!-- Footer Menu--> */}
                                <div className="footer_menu">
                                    <ul>
                                        <li><a href="#">Help</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Single Widget--> */}
                        <div className="col-12 col-sm-6 col-lg">
                            <div className="single-footer-widget section_padding_0_130">
                                {/* <!-- Widget Title--> */}
                                <h5 className="widget-title">Helpful Link</h5>
                                {/* <!-- Footer Menu--> */}
                                <div className="footer_menu">
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
