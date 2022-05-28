import React, { useEffect , useState} from 'react'
import { useParams } from 'react-router';
import SideNavBar from './SideNavBar'

const ResidueDetails = () => {

    const { id } = useParams();
    const [residue, setResidue] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getResidue = async () => {
            setLoading(true);
            const response = await fetch(`http://127.0.0.1:8000/api/residue/8`);
            setResidue(await response.json());
            console.log(residue)
        }
        getResidue();
    }, []);
  
        return (
            <div>
               
                <div id="wrapper" >

                    <SideNavBar />

                    <div className="page-content-wrapper ">
                        <div className="container-fluid ">
                            <div className="row">
                                <div className="col">
                                    <h3 style={{"color":"#172578",}}>Residue Details</h3><br></br>
                                </div>
                                
                            </div>
                        </div>
                       
                        <div className="container-fluid ">
                <div className="row">
                    <div className="col">
                        <div>
                            <div className="container">
                            <div className="row">
                                    <div className="col-6">
                                        <div className="card">
                                            <div className="card-body">
                                            <div className='text-center'>
                                                                
                                                                <img src="assets/img/residue.jpeg" style={{"width":"100%","height":"100%",}} />
                                                                
                                                            </div>
                                                <div className="table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                       
                                                            <tr>
                                                                <th colspan="2">Residue</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Price</td>
                                                                <td>{residue.price}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Type</td>
                                                                <td>{residue.type_of_residue}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Quantity</td>
                                                                <td>{residue.quantity}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
                    </div>
                </div>
                <div className="text-right" style={{ "margin-right": "50px" }}>
                  <img src="assets/img/AFL.jpg" style={{ width: "108px" }} />
                </div>
            </div>
        )
}

export default ResidueDetails;