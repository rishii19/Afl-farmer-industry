import SideBar from './SideBar';
import React, { useEffect, useState } from 'react';

const Residue = () => {

    const [residue, setResidue] = useState([]);

    const fetchData = () => {
        fetch("http://localhost:8000/api/residues")
            .then(response => response.json())
            .then(data => {
                let residues = data;
                console.log("residues list", residues);
                setResidue(residues);
            });
    }
    useEffect(() => {
        fetchData();

    }, []);
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">
                    <SideBar />
                </div>
                <div className="col-md-6">
                    <h1 className='text-center border border-1 p-4  shadow p-3 mb-3 bg-body roundeds' style={{ marginTop: 100 }}>Residues</h1>
                </div>
                <div className="row ">
                    <div className="col-md-9" style={{marginLeft:300}}>
                        <table className="table table-hover p-3">
                            <thead>
                                <tr className="table-dark p-3">
                                    <th scope="col">id</th>
                                    <th scope="col">Type Of residue</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {
                                    residue.map((data, i) =>
                                        <tr key={i} >
                                            <td>{data.id}</td>
                                            <td>{data.type_of_residue}</td>
                                            <td>{data.quantity}</td>
                                            <td>{data.price}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Residue
