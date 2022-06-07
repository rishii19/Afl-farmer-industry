import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom'
import axios from '../api/axios';
import SideBar from './SideBar';
const MachineList = () => {

    const history = useNavigate();

    const [filter, setFilter] = useState([]);
    const [loading, setLoadiing] = useState(false);

    useEffect(async () => {
        setLoadiing(true);
        const {data} = await axios.get("machines/")
        setFilter(data)
        console.log(data);
        setLoadiing(false)

    }, []);

    console.log(filter, '----------')

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

    function handleClick(id) {
        history(`/machines/${id}`)
    }
    const ShowProducts = () => {
        return (
            <>
                {/* <div className="buttons d-flex justify-content-center mb-5 pb-5">
                    <button className="btn btn-outline-dark me-2"  >All</button>
                    <button className="btn btn-outline-dark me-2"  >sell</button>
                    <button className="btn btn-outline-dark me-2" >rent</button>
                </div> */}
                {filter.map((machines) => {
                    return (
                        <>
                            <div className="col-md-4 mb-4 mt-3 ">
                                <div className="card h-100 text-center py-4" key={machines.id}>
                                    <img src={machines.image} className="card-img-top" alt={machines.name} height="200px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{machines.name.substring(0, 12)}</h5>
                                        <p class="card-text lead fw-bold">{machines.sell_price}₹ {machines.id}</p>
                                        <p className="card-text">{machines.description.substring(0, 20)}...</p>
                                        <div class="btn btn-primary" onClick={() => { handleClick(machines.id) }} > more details</div>
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
                <div className="row py-4 justify-content-evenly" >
                    <h1 className='text-center border border-1 py-4  shadow p-4 mt-3 mb-5 bg-body roundeds' style={{ marginTop: 100, color: "#172578 " }}>Machines List</h1>
                    <div className="row justify-content-center">{loading ? <Loading /> : <ShowProducts />}</div>
                </div>
            </div>
        </>
    )
}

export default MachineList;
