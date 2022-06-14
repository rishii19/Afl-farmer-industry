import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import { useNavigate ,Link} from 'react-router-dom';
import axios from '../api/axios';
import { BiArrowBack } from "react-icons/bi"

const Machine = () => {

    const { id } = useParams();
    const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const getProduct = async () => {
        setLoading(true);
        const { data } = await axios.get(`/machines/${id}`);
        setMachines(data);
        setLoading(false);
    }
    useEffect(() => {
        getProduct();
    }, []);

    function deleteMachine(id) {
        axios.delete(`/machines/${id}`,{
        }).then((data) => {
            // console.warn(data)
            alert("Machine Deleted Successfully")      
        })
        getProduct();
        navigate(`/machinelist`);
    }

    const Loading = () => {
        return (
            <>
                <div className="col-md-6">
                    <Skeleton height={400} />
                </div>
                <div className="col-md-6" style={{ lineHeight: 2 }}>
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={50} />
                    <Skeleton height={150} />
                    <Skeleton height={50} width={100} />
                    <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
                </div>

            </>
        )
    }
    const ShowProduct = () => {
        return (
            <>
                <div>
                    <Link to="/machinelist" style={{ textDecoration: "none", color: "black" }}>
                        <p><BiArrowBack />Machine List</p>
                    </Link>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-evenly">
                        <div className="col-md-5 col-sm-12 mt-3">
                            <img src={machines.image} alt={machines.name} className="img-fluid" style={{ height: 400, width: 400 }} />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <h1 className="display-5 font-bold mb-2">{machines.name}</h1>
                            <hr />
                            <p className="lead fw-bold">
                                Weight : {machines.details && machines.details.weight}kg
                            </p>
                            <p className="lead fw-bold">
                                Length :{machines.details && machines.details.length}mm
                            </p>
                            <hr />
                            <p className="lead">{machines.description}</p>
                            <hr />
                            <p className="card-text">Warranty:{machines.warranty} year</p>
                            <p className="card-text">Guarantee:{machines.guarantee} year</p>
                            <hr />
                            <h3 className="display-10 fw-bold my-2 mb-0">
                                Discount : {machines.discount}%
                            </h3>
                            <h3 className="display-10 fw-bold my-2 mb-0">
                                Quantity: {machines.quantity}
                            </h3>
                            <hr />
                            <h3 className="display-6 fw-bold my-2" style={{ color: "#172578" }}>
                                Sell Price : {machines.sell_price}₹
                            </h3>
                            {/* <h3 className="display-6 fw-bold my-2" style={{color:"#172578"}}>
                                Rent Price : {machines.rent_price}₹
                            </h3> */}
                            <button className="btn btn-outline-dark px-4 py-2" onClick={() => deleteMachine(machines.id)}>
                                Delete
                            </button>
                            <Link to={'/update/' + machines.id} className="btn btn-dark ms-2 px-3 py-2">
                                Update
                            </Link>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    return (
        <>
            <div className="container">
                <div className="row py-4 justify-content-evenly" >
                    <div className="row justify-content-center"> {loading ? <Loading /> : <ShowProduct />}</div>
                </div>
            </div>
        </>

    );
}

export default Machine;


