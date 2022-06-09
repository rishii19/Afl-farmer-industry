import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


const Header = () => {
  return (
    <>
      <div className="container-fluid" id='hero'>
        <div className="row">
          <div className="col-md-12">
            <h1 id='heading'>An Initiative of UIET and MeitY</h1>
            <p id='para'>Buy and Rent </p>
            <p id='p2'>your Farming Machines with us</p>
            <Button id='btn'>Explore More</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
