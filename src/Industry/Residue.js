import React, { useEffect, useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Residue = ({ title }) => {

    const [residues, setResidues] = useState([]);
    const history = useNavigate();
    

    const fetchData = () => {
        axios.get("residues")
            .then(response => {
                // console.log("residues list", response.data);
                setResidues(response.data);
            })
            .catch(e => {
                console.log(e);
            })

    }
    
    const createorder = (id) => {
        axios.post("residue-orders/", {
            residue: id
        }).then(res => {
            console.log("Hello",res.data.residue)
        }).catch(e => {
            alert("order fail")
        })
        history('/residueordersuccess')
        // reload();
        

    }

    useEffect(() => {
        fetchData();
    }, []);

    const ShowResidue = () => {
        return (
            <>
                {
                    residues.map((residue) =>
                        <div className="col-md-4 mb-4 mt-3 ">
                            <div className="card h-100 text-center " style={{ "width": "18rem" }} key={residue.id}>
                                <div className="card-body">
                                    <h5 className="card-title mb-0">{residue.type_of_residue}</h5>
                                    <h6 className="card-title mb-0"> Quantity: {residue.quantity}</h6>
                                    <p className="card-text mb-0">{residue.owner.name} </p>
                                    <h3 className="card-text lead fw-bolder">{residue.price}₹ </h3>
                                    <button type="button" className="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Buy
                                    </button>
                                    <div className="modal fade mt-5 " style={{marginLeft:"5%"}} id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog modal-dialog-centered">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                  <h4>Are You Sure You Want To Buy this Residue</h4>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                                    {/* <div className="btn btn-outline-dark" onClick={() => {createorder(residue.id) }}>Buy</div> */}
                                                    <button type="button" className="btn btn-primary" onClick={() => { createorder(residue.id) }} data-bs-dismiss="modal" >Yes I'm Sure</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className="btn btn-outline-dark" onClick={() => {createorder(residue.id) }}>Buy</div> */}
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
