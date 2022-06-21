import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";

const ResidueDetails = () => {
  const [residues, setResidue] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {

    axios.get("residues/").then((response) => {
      // console.log("residues list", response.data);
      setResidue(response.data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  function deleteResidue(id) {
    axios.delete(`/residues/${id}`, {
    }).then((response) => {
      console.log(response.data)
      fetchData();
    })
    navigate(`/residuedetails`);

  }
  const ShowResidue = () => {
    return (
      <>
        {residues.map((residue, i) => (
          <div className="col-md-4 mb-4 mt-3 ">
            <div
              className="card h-40 text-center py-3"
              style={{ width: "18rem" }}
              key={i}
            >
              <div className="card-body">
                <h5 className="card-title mb-0">{residue.type_of_residue}</h5>
                <h6 className="card-title mb-0"> Quantity: {residue.quantity}</h6>
                <p className="card-text lead fw-bold">{residue.price}₹ </p>
                <button className="btn btn-outline-dark px-4 py-2" onClick={() => deleteResidue(residue.id)}>
                  Delete
                </button>
                <Link to={'/editresidue/' + residue.id} className="btn btn-dark ms-2 px-3 py-2">
                  Update
                </Link>

              </div>
            </div>
          </div>
        ))}
      </>
    );
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-evenly" >
          <h1 className='text-center border-bottom shadow-sm mb-3 p-1 bg-body rounded' style={{  color: "#172578 " }}>Residues
          </h1>
          <div>
            <Link to="/sellresidue" style={{ textDecoration: 'none' }}>
              <button className="btn btn-outline-dark px-3 py-1 d-flex ms-auto ">
                Add Residue
              </button>
            </Link>
          </div>
          <div className="row justify-content-center mt-1">{<ShowResidue />}</div>
        </div>
      </div>
    </>
  );
};

export default ResidueDetails;
