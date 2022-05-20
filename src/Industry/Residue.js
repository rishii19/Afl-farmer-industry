import axios from 'axios'
import React,{useState} from 'react'
import { useParams } from 'react-router';

const Residue = () => {

    const { id } = useParams();
    const [residue,setResidue] =useState("");
    const getresidue =() =>{
        axios.get(`http://127.0.0.1:8001/api/residue/${id}`,
        { headers:
            {
                'Content-Type': 'application/json',
              } })
      
        .then((response)=>{
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
          })
    }
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-4">
                <button className="btn btn-primary" onClick={getresidue}></button>
            </div>
        </div>
    </div>
  )
}

export default Residue
