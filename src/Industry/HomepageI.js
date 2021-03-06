import React, { useState } from "react";
import Request from '../Components/MachineRequest'
import Residue from '../Components/MachineResidue'

function Homepagei() {
  const [active, setActive] = useState('Request')

  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-evenly" >
          <div className="col-md-6 col-sm-12">
            <h1 className='text-center border-bottom shadow-sm mb-3 p-1 bg-body rounded' onClick={() => setActive("Request")} style={{color: "#172578 " }}
            >Requests</h1>
          </div>
          <div className="col-md-6 col-sm-12">
            <h1 className='text-center border-bottom shadow-sm mb-4 p-1 bg-body rounded' onClick={() => setActive("Residue")} style={{ color: "#172578 " }}
            >Residue</h1>
          </div>
          <div>
              {active === "Request" && <Request />}
              {active === "Residue" && <Residue />}
            </div>
        </div>
      </div>
    </>
  );
}

export default Homepagei;
