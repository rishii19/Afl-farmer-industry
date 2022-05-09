import React, { Component } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

export class Dashboard extends Component {
  render() {
    return (
      <div>
          <Navbar/>
          <div className="container mt-4 mb-4">
        <div className="input-group">
            <div className="input-group-prepend"><span className="bg-light input-group-text"><i className="fa fa-search"></i></span></div>
            <input className="form-control" type="text" placeholder="Search Here . . ."/>
            <div className="input-group-append"><button className="btn btn-primary" type="button">Search !!!</button></div>
        </div>
    </div>
<hr />
<div className="container" style={{"margin-top": "110px"}}>
        <div className="row">
            <div className="col-xl-5">
                <div className="card text-white bg-primary shadow mb-5" style={{"border-radius": "10px","background": "linear-gradient(0deg, rgb(53,103,190), rgb(69,130,236))"}}>
                    <div className="card-body">
                        <div className="text-center"><img className="img-fluid bg-white shadow" src="assets/img/Farmer1.jpg" style={{"margin-top": "-100px","border-radius": "17px", "height": "325px"}}/></div>
                        <h5 className="card-title mt-4">Sell Farming Machines</h5>
                        <p className="card-text">Your safe and easy way to sell used farm equipment online at the best price</p><button className="btn btn-dark" type="button">View</button></div>
                </div>
            </div>
            <div className="col-xl-2"></div>
            <div className="col-xl-5">
                <div className="card text-white bg-success shadow" style={{"border-radius": "10px","background": "linear-gradient(-180deg, rgb(2,184,117), rgb(0,143,90))"}}>
                    <div className="card-body">
                        <div className="text-center"><img className="img-fluid bg-white shadow" src="assets/img/Tractor1.png" style={{"margin-top": "-100px","border-radius": "17px"}}/></div>
                        <h5 className="card-title  mt-4">Buy Farming Machines</h5>
                        <p className="card-text">Your safe and easy way to buy farm equipment online at the best price</p><button className="btn btn-dark" type="button">View</button></div>
                </div>
            </div>
        </div>
    </div>
<Footer/>
      </div>
    )
  }
}

export default Dashboard