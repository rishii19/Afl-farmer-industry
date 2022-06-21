import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi"
import Skeleton from 'react-loading-skeleton';
import axios from '../api/axios';

const MoreDetailsIndustryList = () => {
    const { id } = useParams();
    const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(false)

    const getProduct = async () => {
        setLoading(true);
        const { data } = await axios.get(`/machines/${id}`);
        console.log(data);
        setMachines(data);
        setLoading(false);
    }

    useEffect(() => {
        getProduct();
    }, []);

    const handleAddToCart = (id, quantity = 1) => {
        axios.post("cart/", {
            items: [{
                machine: id,
                quantity
            }]
        })
        console.log(id);
    }

    // function deleteMachine(id) {
    //     axios.delete(`/machines/${id}`, {
    //     }).then((response) => {
    //         console.log(response.data)
    //     })
    //     navigate(`/rentmachines`);
    // }

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
                <div className="container-fluid">
                    <div className="row justify-content-evenly">
                        <div className="col-md-5 mt-3">
                            <img src={machines.image} alt={machines.name} className="img-fluid" style={{ height: 400, width: 400 }} />
                        </div>
                        <div className="col-md-6">
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
                            <h3 className="display-6 fw-bold my-2" style={{ color: "#172578" }}>
                                Price : {machines.sell_price}₹
                            </h3>
                            <p className="card-text" style={{color:"red"}}>hurry: only {machines.quantity} remaining </p>
                            <div class="btn btn-primary" style={{ width: 170 }} onClick={() => { handleAddToCart(machines.id) }}> Add to Cart</div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
    return (
        <div>
            <div>
                <Link to="/homepagefarmer" style={{ textDecoration: "none",  color: "black" }}>
                    <p style={{fontSize:"20px"}}><BiArrowBack />Continue Shopping</p>
                </Link>
            </div>
            <div className="container py-2 ">
                <div className="row py-4 justify-content-evenly" >
                    {loading ? <Loading /> : <ShowProduct />}
                </div>
            </div>
        </div>
    );
}

export default MoreDetailsIndustryList;


