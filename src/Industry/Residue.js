import React, { useEffect, useState } from 'react';
import axios from '../api/axios';

const Residue = ({ title }) => {

    const [residues, setResidues] = useState([]);

    const fetchData = () => {
        axios.get("residues")
            .then(response => {
                // console.log("residues list", response.data);
                setResidues(response.data);
            })
            .catch(e => {
                console.log(e);
              });
    }
    const createorder = (id) => {
        axios.post("residue-orders/", {
            residue: id
        }).then(res => {
            alert('ordered successfully')
        }).catch(e => {
            alert("order fail")
        })
    }

    useEffect(() => {
        fetchData();
    }, []);

    const ShowResidue = () => {
        return (
            <>
                {
                    residues.map((residue, i) =>
                        <div className="col-md-4 mb-4 mt-3 ">
                            <div className="card h-100 text-center py-3" style={{ "width": "18rem" }} key={residue.id}>
                                <div  className="card-body">
                                    <h5  className="card-title mb-0">{residue.type_of_residue}</h5>
                                    <h6  className="card-title mb-0"> Quantity: {residue.quantity}</h6>
                                    <p className="card-text mb-0">{residue.owner.name} </p>
                                    <h3 className="card-text lead fw-bolder">{residue.price}₹ </h3>
                                    <div  className="btn btn-outline-dark" onClick={() => { createorder(residue.id) }}>Buy</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </>
        )
    }
    return (
        <>
            <div className="container">
                <div className="row py-4 justify-content-evenly" >
                    <h1 className='text-center border border-1 py-4  shadow p-4 mt-3 mb-5 bg-body roundeds' style={{ marginTop: 100, color: "#172578 " }}>{title}</h1>
                    <div className="row justify-content-center">{<ShowResidue />}</div>
                </div>
            </div>
        </>
    )
}

export default Residue;
