import React, { useState, useEffect } from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useNavigate } from 'react-router-dom'
const BuyMachines = () => {
    
    const history = useNavigate();

    const [filter, setFilter] = useState([]);
    const [loading, setLoadiing] = useState(false);

    useEffect(() => {
        setLoadiing(true);
        fetch("http://127.0.0.1:8000/api/machines/").then(response => response.json())
        .then(data => {
            setFilter(data)
            setLoadiing(false)
        });

    }, []);

    console.log(filter,'----------')

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        )
    }

    function handleClick(id){
        history(`/machine/${id}`)
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
                            <div className="col-md-3 mb-4">
                                <div className="card h-100 text-center py-4" key={machines.id}>
                                    <img src={machines.image} className="card-img-top" alt={machines.name} height="200px" />
                                    <div class="card-body">
                                        <h5 class="card-title mb-0">{machines.name.substring(0, 12)}</h5>
                                        <p class="card-text lead fw-bold">{machines.price}₹ {machines.id}</p>
                                        <p className="card-text">{machines.description.substring(0, 20)}...</p>
                                        <div  class="btn btn-primary" onClick={()=>{handleClick(machines.id)}} > more details</div>
                                        <br></br>
                                        <br></br>
                                        <div  class="btn btn-primary"> Add to Cart</div>
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
        <div>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>Machines List</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">{loading ? <Loading /> : <ShowProducts />}</div>
            </div>
        </div>
    )
}

export default BuyMachines;