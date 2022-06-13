import React from 'react'
import { BiArrowBack } from "react-icons/bi"
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5"
import { Link } from 'react-router-dom'

const OrderSuccessful = () => {
  return (
    <div className='Container'
    style={{marginTop:"10%"}}>
      <div className="row align-items-center justify-content-evenly">
        <div className="col-md-8 border border-solid-1 border-success rounded-4">
          <div style={{ textAlign: "center" }}>
            <h1 style={{ marginTop: 30, fontSize: 40 }}>Order Successful..</h1>
            <IoCheckmarkDoneCircleOutline style={{ color: "green", height: "100px", width: "100px" }} />
            <Link to="/residues" style={{ textDecoration: "none", color: "black" }}>
              <p style={{ fontSize: 20 }}><BiArrowBack />Buy More Residues</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccessful
