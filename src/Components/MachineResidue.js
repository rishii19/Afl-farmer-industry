import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';

const MachineResidue = () => {

    const [residues, setResidues] = useState([]);
    const history = useNavigate();

    const fetchData = () => {
        axios.get("residues")
            .then(response => {
                console.log("residues list", response.data);
                setResidues(response.data);
            });
    }
    const createorder = (id) => {
        axios.post("residue-orders/", {
            residue: id
        }).then(res => {
        }).catch(e => {
            alert("order fail")
        })
        history('/residueordersuccess')
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
                            <div className="card h-40 text-center py-3" style={{ "width": "18rem" }} key={residue.id}>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{residue.type_of_residue}</h5>
                                    <h6 className="card-title mb-0"> Quantity: {residue.quantity}</h6>
                                    <p className="card-text mb-0">{residue.owner.name} </p>
                                    <h3 className="card-text lead fw-bolder">{residue.price}₹ </h3>
                                    <div className="btn  btn-outline-dark" onClick={() => { createorder(residue.id) }}>Buy</div>
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
                    <div className="row justify-content-center">{<ShowResidue />}</div>
                </div>
            </div>
        </>
    )
}

export default MachineResidue;
