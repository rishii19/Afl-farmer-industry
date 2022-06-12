import React, { useState, useEffect, useMemo } from "react";
import axios from "../api/axios";
const Request = () => {
  const [request, setRequest] = useState([]);
  const [filter, setFilter] = useState("pending");

  var filterdata = useMemo(() => {
    return request.filter((x) => x.status === filter);
  }, [filter, request]);

  const requests = () => {
    axios.get("residue-orders/").then((response) => {
      const requestList = response.data;
      console.log(requestList);
      setRequest(requestList);
    });
  };
  useEffect(() => {
    requests();
  }, []);

  const acceptOrReject = (id, status) => {
    axios
      .patch(`/residue-orders/${id}`, {
        status,
      })
      .then(() => requests());
  };

  const ShowRequests = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-2 pb-5">
          {/* <button type="button"  className="btn btn-outline-dark me-2" onClick={() => setFilter("All")}>All</button> */}
          <button
            type="button"
             className="btn btn-outline-dark me-2"
            onClick={() => setFilter("pending")}
          >
            Pending
          </button>
          <button
            type="button"
             className="btn btn-outline-dark me-2"
            onClick={() => setFilter("accepted")}
          >
            Accepted
          </button>
          <button
            type="button"
             className="btn btn-outline-dark me-2"
            onClick={() => setFilter("rejected")}
          >
            {" "}
            Rejected
          </button>
        </div>
        {filterdata.map((data, i) => (
          <div className="col-md-4 mb-4 mt-3 ">
            <div
              className="card h-100 text-center py-3"
              style={{ width: "16rem" }}
              key={i}
            >
              <div  className="card-body">
                <h5  className="card-title mb-0">{data.id}</h5>
                <h5  className="card-title mb-0">{data.residue.type_of_residue}</h5>
                <h6  className="card-title mb-0">
                  {" "}
                  Quantity: {data.residue.quantity}
                </h6>
                <p  className="card-text mb-0">{data.customer.name}</p>
                <p  className="card-text lead fw-bold">{data.residue.price}₹ </p>
                {data.status === "pending" && (
                  <>
                    <div
                       className="btn btn-dark px-3"
                      onClick={() => {
                        acceptOrReject(data.id, "accepted");
                      }}
                    >
                      Accept
                    </div>
                    <div
                       className="btn btn-dark px-3"
                      style={{ marginLeft: 10 }}
                      onClick={() => {
                        acceptOrReject(data.id, "rejected");
                      }}
                    >
                      Reject
                    </div>
                  </>
                )}
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
        <div className="row py-4 justify-content-evenly" >
          <h1 className='text-center border border-1 py-4  shadow p-4 mt-3 mb-5 bg-body roundeds' style={{ marginTop: 100, color: "#172578 " }}>Requests
          </h1>
          <div className="row justify-content-center ">{<ShowRequests />}</div>
        </div>
      </div>
    </>

  );
};

export default Request;
