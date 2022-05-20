import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';

const MachineFarmer = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [machines, setMachines] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://localhost:8000/api/machine/${id}`);
            setMachines(await response.json());
            setLoading(false);
        }
        getProduct();
    }, []);

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
                {/* <div className="col-md-6">
                    <img src={machines.image} alt={machines.title} className="img-fluid" />
                </div> */}
                <div className="col-md-12">
                    <h1 className="display-5 font-bold mb-2">{machines.name}</h1>
                    <h5 className="text-uppercase text-black-50">
                        {machines.fetures}
                    </h5>
                    <p className="lead fw-bold">
                        Weight : {machines.details && machines.details.weight}
                        <i className="fa fa-star"></i>
                    </p>
                    <p className="lead fw-bold">
                        Length :{machines.details && machines.details.lenght}
                        <i className="fa fa-star"></i>
                    </p>
                    <h3 className="display-6 fw-bold my-4">
                       Price : {machines.price}₹
                    </h3>
                    <h3 className="display-6 fw-bold my-4">
                       Discount : {machines.discount}%
                    </h3>
                    <p className="card-text">Warrennty:{machines.warrenty}</p>
                    <p className="card-text">Guarantee:{machines.guarantee}</p>
                    <p className="lead">{machines.description}</p>
                    <button className="btn btn-outline-dark px-4 py-2">
                        Add to cart
                    </button>
                    {/* <NavLink to="/d" className="btn btn-dark ms-2 px-3 py-2">
                        Edit
                    </NavLink> */}
                </div>
            </>
        )
    }

    return (
        <div>
            <div className="container py-5 bg-secondary bg-opacity-10">
                <div className="row py-4 justify-content-evenly" >
                    <div className="col-md-9">
                        {loading ? <Loading /> : <ShowProduct />}
                    </div>

                </div>
            </div>
            <div className='BackBox'>
                      <button className='btn btn-primary' onClick={()=>{navigate('/homepagefarmer')}}>Go To Home</button>
                    </div>
        </div>
    );
}

export default MachineFarmer;


