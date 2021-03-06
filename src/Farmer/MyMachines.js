import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";
import axios from "../api/axios";
const RentMachines = () => {
  const history = useNavigate();

  const [filter, setFilter] = useState([]);
  const [loading, setLoadiing] = useState(false);

  useEffect(async () => {
    setLoadiing(true);
    const { data } = await axios.get("machines/?own=true");
    setFilter(data);
    setLoadiing(false);
  }, []);


  const Loading = () => {
    return (
      <>
        <div className="col-md-4">
          <Skeleton height={350} />
        </div>
        <div className="col-md-4">
          <Skeleton height={350} />
        </div>
        <div className="col-md-4">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  function handleClick(id) {
    history(`/machine/${id}`);
  }
  const ShowProducts = () => {
    return (
      <>
        {filter.map((machines) => {
          return (
            <>
              <div className="col-md-4 mb-4 mt-3 ">
                <div className="card h-100 text-center " style={{ "width": "17rem" }} key={machines.id}>
                  <Link to={`/machine/${machines.id}`} style={{textDecoration:"none",color:"black"}}>
                  <img
                    src={machines.image}
                    className="card-img-top"
                    alt={machines.name}
                    height="200px"
                  />
                  <div  className="card-body">
                    <h5  className="card-title mb-0">
                      {machines.name.substring(0, 12)}
                    </h5>
                    <p  className="card-text lead fw-bold mb-0">
                      {machines.rent_price}₹ 
                    </p>
                    <p className="card-text">
                      {machines.description.substring(0, 20)}...
                    </p>
                    <div
                       className="btn btn-primary"
                      onClick={() => {
                        handleClick(machines.id);
                      }}
                    >
                      {" "}
                      more details
                    </div>
                  </div>
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <>
    <div className="container">
      <div className="row justify-content-evenly" >
        <h1 className='text-center border-bottom shadow-sm mb-3 p-1 bg-body rounded' style={{color: "#172578 " }}>My Machines
        </h1>
        <div>
        <Link to="/addnewmachine" style={{ textDecoration: 'none' }}>
            <button className="btn btn-outline-dark py-1 px-3 d-flex ms-auto ">
            Add Machine
            </button>
          </Link>
        </div>
        <div className="row justify-content-center mt-1"> {loading ? <Loading /> : <ShowProducts />}</div>
      </div>
    </div>
  </>
     
  );
};


export default RentMachines;
