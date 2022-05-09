import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class SideNavBar extends Component {
  render() {
    return (
    <div >
      <div style={{"backgroundColor":"#172578"}} id="sidebar-wrapper">
           <ul className="sidebar-nav">
              <li className="sidebar-brand" style={{"height": "268px"}}> <a className="text-center text-white" href="#" style={{"padding-top": "35px"}}><img className="img-fluid bg-white border rounded-circle" src="assets/img/User_New.png" style={{"width": "111px"}}/><p>Name</p></a></li>
              <li>
               
              <Link className="text-white" to="/home"><i className="fa fa-pie-chart mr-3"></i>Home</Link>
              <Link className="text-white" to="/machinedetails"><i className="fa fa-calendar-o mr-3"></i>Machine Details</Link>
    
                  <Link className="text-white" to="#"><i className="fa fa-clock-o mr-3"></i>Schedule</Link>
                  <Link className="text-white" to="#"><i className="fa fa-users mr-3"></i>Connections</Link>
                  <Link className="text-white" to="#"><i className="fa fa-gear mr-3"></i>Settings</Link>
                  </li>
              <li> </li>
              <li> </li>
          </ul>
      </div>
    </div>
    )
  }
}

export default SideNavBar