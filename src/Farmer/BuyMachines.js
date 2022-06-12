import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom'
import axios from '../api/axios';
const BuyMachines = () => {

    
    const [cart ,setCart] =useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoadiing] = useState(false);

    useEffect(async () => {
        setLoadiing(true);
        const { data } = await axios.get("machines/")
        setFilter(data)
        console.log(data);
        setLoadiing(false)

    }, []);

    const handleAddToCart = (id, quantity = 1) => {
        axios.post("cart/", {
            items: [{
                machine: id,
                quantity
            }]
        })
        cart.push(id)
        console.log(cart)
    }

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
        )
    }

    // function handleClick(id) {
    //     history(`/moredetails/${id}`);
    // }
    const ShowProducts = () => {
        return (
            <>

                {filter.map((machines) => {
                    return (
                        <>
                            <div className="col-md-4 mb-4 mt-3 ">
                                <div className="card h-100 text-center py-4" key={machines.id}>
                                    <Link to={`/moredetails/${machines.id}`}>
                                        <img src={machines.image} className="card-img-top" alt={machines.name} height="200px" /></Link>
                                    <div class="card-body">
                                        <Link to={`/moredetails/${machines.id}`} style={{ textDecoration: "none", color: "black" }}> <h5 class="card-title mb-0">{machines.name.substring(0, 12)}</h5></Link>
                                        <p class="card-text lead fw-bold mb-0">{machines.sell_price}₹</p>
                                        <p className="card-text ">{machines.description.substring(0, 20)}...</p>
                                        <div class="btn btn-primary" onClick={() => { handleAddToCart(machines.id) }} > Add to Cart</div>
                                        {/* <div class="btn btn-primary" onClick={() => { handleClick(machines.id) }} > more details</div> */}
                                    </div>
                                </div>
                            </div>
                        </>
                    )

                })}
            </>
        )
    }
    return (
        <>
            <div className="container">
                <div className="row py-4 justify-content-evenly">
                    <div className="row justify-content-center mt-2">
                        {loading ? <Loading /> : <ShowProducts />}
                    </div>
                </div>
            </div>
        </>
    )
}


export default BuyMachines;
