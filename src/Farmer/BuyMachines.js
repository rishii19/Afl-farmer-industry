import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { Link } from 'react-router-dom'
import axios from '../api/axios';
const BuyMachines = () => {


    const [cart, setCart] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoadiing] = useState(false);

    useEffect(async () => {
        setLoadiing(true);
        const { data } = await axios.get("machines/")
        console.log(data)
        setFilter(data)
        setLoadiing(false)

    }, []);

    const handleAddToCart = (id, quantity = 1) => {
        axios.post("cart/", {
            items: [{
                machine: id,
                quantity
            }]
        })
        alert('Item Added To the Cart')
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

    const ShowProducts = () => {
        return (
            <>

                {filter.map((machines) => {
                    return (
                        <>
                            <div className="col-md-4 mb-4 mt-3 " key={machines.id}>
                                <div className="card h-100 text-center py-4" >
                                    <Link to={`/moredetails/${machines.id}`}>
                                        <img src={machines.image} className="card-img-top" alt={machines.name} height="200px" /></Link>
                                    <div className="card-body">
                                        <Link to={`/moredetails/${machines.id}`} style={{ textDecoration: "none", color: "black" }}>
                                            <h5 className="card-title mb-0">{machines.name.substring(0, 12)}</h5>
                                            <p className="card-text lead fw-bold mb-0">{machines.sell_price}₹</p>
                                            <p className="card-text ">{machines.description.substring(0, 20)}...</p>
                                        </Link>
                                        <div className="btn btn-primary" onClick={() => { handleAddToCart(machines.id) }} > Add to Cart</div>
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
