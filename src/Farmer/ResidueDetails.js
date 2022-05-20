import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Skeleton from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';

const ResidueDetails = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [residues, setResidues] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            setLoading(true);
            const response = await fetch(`http://127.0.0.1:8000/api/residue/${id}`);
            setResidues(await response.json());
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
                    {/* <h1 className="display-5 font-bold mb-2">{residues.type_of_residue}</h1>
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
                    </p> */}
                    <h3 className="display-6 fw-bold my-4">
                       Price : {residues.price}₹
                    </h3>
                    <h3 className="display-6 fw-bold my-4">
                       Quantity : {residues.quantity}kg
                    </h3>
                    <h3 className="display-6 fw-bold my-4">
                       Type of Residue : {residues.type_of_residue}
                    </h3>
                    {/* <p className="card-text">Warrennty:{machines.warrenty}</p>
                    <p className="card-text">Guarantee:{machines.guarantee}</p>
                    <p className="lead">{machines.description}</p> */}
                    {/* <button className="btn btn-outline-dark px-4 py-2">
                        Add to cart
                    </button> */}
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

export default ResidueDetails;










// import React, { Component } from 'react'
// import SideNavBar from './SideNavBar'

// export class ResidueDetails extends Component {
  
//     render() {
//         return (
//             <div>
               
//                 <div id="wrapper" >

//                     <SideNavBar />

//                     <div className="page-content-wrapper pt-3">
//                         <div className="container-fluid pt-3">
//                             <div className="row">
//                                 <div className="col">
//                                     <h3 style={{"color":"#172578","textAlign":"center"}}>Residue Details</h3><br></br>
//                                 </div>
                                
//                             </div>
//                         </div>
                       
//                         <div className="container-fluid pt-3">
//                 <div className="row">
//                     <div className="col">
//                         <div>
//                             <div className="container">
//                                 <div className="row">
//                                     <div className="col-6">
//                                         <div className="card">
//                                             <div className="card-body">
//                                             <div className='text-center'>
                                                                
//                                                                 <img src="assets/img/residue.jpeg" style={{"width":"500px","height":"500px",}} />
                                                                
//                                                             </div>
//                                                 <div className="table-responsive">
//                                                     <table className="table">
//                                                         <thead>
                                                       
//                                                             <tr>
//                                                                 <th colspan="2">Residue</th>
//                                                             </tr>
//                                                         </thead>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <td>Price</td>
//                                                                 <td>12000</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>Type</td>
//                                                                 <td>Agricultural</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>Quantity</td>
//                                                                 <td>20kg</td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
                                   
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//                     </div>
//                 </div>
//                 <div className="text-right" style={{ "margin-right": "50px" }}>
//                   <img src="assets/img/AFL.jpg" style={{ width: "108px" }} />
//                 </div>
//             </div>
//         )
//     }
// }

// export default ResidueDetails