import React, { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "../api/axios";


function EditResidue() {
    const { id } = useParams();
  const history = useNavigate();
  const [type_of_residue, setTypeofresidue] = useState([]);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  
  const formData = new FormData();
  const getProductDetails = async () => {
    const { data } = await axios.get(`/residues/${id}`)
    // console.log(data)
    setTypeofresidue(data.type_of_residue)
    setPrice(data.price)
    setQuantity(data.quantity)


  }
  useEffect(() => {
    getProductDetails()
  }, [])
  async function editresidue(e) {
    e.preventDefault();
    let formdata = {
        type_of_residue: type_of_residue,
        price: price,
        quantity: quantity,
    };
    
      for (const [key, value] of Object.entries(formdata)) {
        formData.append(key, value)
        console.log(key, value);
      }

    
    await axios.patch(`/residues/${id}`,formData )
    alert('Residue updated successfully')
    history(`/residuedetails`)


  }
  return (
    <>
     
      <div className="container-fluid mt-5" style={{ height: "100%" }}>
        <div className="row justify-content-evenly">
        <h1
            className="text-center border border-3 py-4  shadow p-4 mt-3 mb-3 bg-body roundeds"
            style={{ marginTop: 100, color: "#172578 " }}
          >
            Edit Residue
            
          </h1>
          <div className="col-md-6 col-sm-12 align-self-center">
          <br></br><br></br><br></br>
            
          </div>
          
            <form onSubmit={editresidue} style={{ padding: "30" }}>
              <label htmlFor="colFormLabel" className="col-3 mt-1 fw-bolder">
              Residue Type
              </label>
              <input
                type="text"
               
                className="form-control"
                value={type_of_residue}
                placeholder="Type of Residue"
                onChange={(e) => setTypeofresidue(e.target.value)}
              />
              <label htmlFor="colFormLabel" className="col-1 mt-1 fw-bolder">
              Quantity:(Kg)
              </label>
              <input
                type="number"
           
                className="form-control"
                value={quantity}
                placeholder="Quantity"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <label htmlFor="colFormLabel" className="col-1 mt-1 fw-bolder">
               Price
              </label>
              <input
                type="number"
        
                className="form-control"
                value={price}
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
              <button
                className="btn btn-primary btn-md mt-3"
                type="submit"
              >
                {" "}
                Update Residue
              </button>
            </form>
          </div>
        </div>
 
    </>
  )
}


export default EditResidue;
