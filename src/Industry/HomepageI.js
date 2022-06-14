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
            <h1 className='text-center border border-2 p-2  shadow p-2 mt-0 mb-2 bg-body rounded-2' onClick={() => setActive("Request")} style={{ marginTop: 100, color: "#172578 " }}
            >Requests</h1>
          </div>
          <div className="col-md-6 col-sm-12">
            <h1 className='text-center border border-2 p-2  shadow p-2 mt-0 mb-2 bg-body rounded-2' onClick={() => setActive("Residue")} style={{ marginTop: 100, color: "#172578 " }}
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
