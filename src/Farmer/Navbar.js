import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <><nav className="navbar navbar-light fixed-top navbar-expand-md bg-white shadow-sm">
      <div className="container-fluid"><a className="navbar-brand" href="#">
      
          <img src="assets/img/AFL.jpg" style={{"width": "88px"}} /></a><button data-toggle="collapse" data-target="#navcol-1" className="navbar-toggler"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
          <div
              className="collapse navbar-collapse d-xl-flex align-items-xl-center" id="navcol-1">
              <ul className="nav navbar-nav flex-fill">
                  <li className="nav-item"><a className="nav-link active" href="#">New Car</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">User Car</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Compare</a></li>
                  <li className="nav-item"><a className="nav-link" href="#">Sell</a></li>
                  <li className="nav-item">
                      <div className="nav-item dropdown p-2" ><a data-toggle="dropdown" aria-expanded="false" className="dropdown-toggle text-muted" href="#">Article</a>
                          <div className="dropdown-menu"><a className="dropdown-item" href="#">First Item</a><a className="dropdown-item" href="#">Second Item</a><a className="dropdown-item" href="#">Third Item</a></div>
                      </div>
                  </li>
              </ul>
              <ul className="nav navbar-nav d-inline-flex d-xl-flex align-self-end">
                  <li className="nav-item"><a className="nav-link active text-muted" href="#"><i className="fa fa-user"></i> Sign-In</a></li>
                  {/* <li className="nav-item">
                      <div className="nav-item dropdown p-2" ><a data-toggle="dropdown" aria-expanded="false" className="dropdown-toggle text-muted" href="#"><i className="fa fa-globe"></i> EN</a>
                          <div className="dropdown-menu"><a className="dropdown-item" href="#">First Item</a><a className="dropdown-item" href="#">Second Item</a><a className="dropdown-item" href="#">Third Item</a></div>
                      </div>
                  </li> */}
              </ul>
      </div>
      </div>
  </nav></>
    )
  }
}

export default Navbar