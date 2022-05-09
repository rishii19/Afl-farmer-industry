import React, { Component } from 'react'
import Navbar from './Navbar'
import SideNavBar from './SideNavBar'

export class BuyMachines extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <div id="wrapper" style={{ "margin-top": "57px" }}>
                    <div className="bg-secondary" id="sidebar-wrapper">
                        <SideNavBar />
                    </div>
                    <div className="page-content-wrapper pt-3">
                        <div className="container-fluid">

                            <div class="row">
                                <div class="col">
                                    <div class="card border-primary border rounded shadow-sm" style={{ "width": "275px" }}>
                                        <div class="card-body text-center">
                                            <h4 class="card-title">Buy</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card border-primary border rounded shadow-sm" style={{ "width": "275px" }}>
                                        <div class="card-body text-center">
                                            <h4 class="card-title">Sell</h4>
                                        </div>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="card border-primary border rounded shadow-sm" style={{ "width": "275px" }}>
                                        <div class="card-body text-center">
                                            <h4 class="card-title">Connections</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container-fluid pt-3">
                            <div className="row">
                                <div className="col">
                                    <div>
                                        <div className="container">
                                            <h2 class="mt-4">Recent</h2>
                                            <div className="cust_bloglistintro">
                                                <p style={{ "margin-left": "34px", "color": "rgba(255,255,255,0.5)", "font-size": "14px" }}></p>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 cust_blogteaser pb-5 mt-5">
                                                    <div className="card shadow-sm">
                                                        <div className="card-body"><img className="img-fluid" style={{ "height": "auto" }} src="assets/img/Teslaa.png" />
                                                            <h3 className="ml-5 mt-5" >Tesla Model 3<br /></h3>
                                                            <p className="text-secondary ml-5" >Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id. </p>
                                                            <p><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></p><button className="btn btn-primary" type="button">Button</button></div>
                                                    </div><a href="#"></a></div>
                                                <div className="col-md-4 cust_blogteaser pb-5 mt-5">
                                                    <div className="card shadow-sm">
                                                        <div className="card-body"><img className="img-fluid" style={{ "height": "auto" }} src="assets/img/Teslaa.png" />
                                                            <h3 className="ml-5 mt-5" >Tesla Model 3<br /></h3>
                                                            <p className="text-secondary ml-5" >Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id. </p>
                                                            <p><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></p><button className="btn btn-primary" type="button">Button</button></div>
                                                    </div><a href="#"></a></div>
                                                <div className="col-md-4 cust_blogteaser pb-5 mt-5">
                                                    <div className="card shadow-sm">
                                                        <div className="card-body"><img className="img-fluid" style={{ "height": "auto" }} src="assets/img/Teslaa.png" />
                                                            <h3 className="ml-5 mt-5" >Tesla Model 3<br /></h3>
                                                            <p className="text-secondary ml-5" >Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, interdum justo suscipit id. </p>
                                                            <p><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></p><button className="btn btn-primary" type="button">Button</button></div>
                                                    </div><a href="#"></a></div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BuyMachines