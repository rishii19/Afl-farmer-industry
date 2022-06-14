import React from 'react';
import './Header.css';
import { Link } from 'react-scroll'
import { MdExpandMore } from 'react-icons/md'
// import { Button } from 'react-bootstrap';




const Header = () => {

  return (
    <>
      <div className="container-fluid" id='hero'>
        <div className="row">
          <div className="col-md-12">
            <h1 id='heading'>An Initiative of UIET and MeitY</h1>
            <p id='para'>Buy and Rent </p>
            <p id='p2'>Farming Machines and Residue with us</p>
            <Link to='ficard' smooth={true} offset={-50} duration={1000}>
                <button id='btn'> Explore More</button>   
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
