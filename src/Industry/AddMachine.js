import React, { useState } from 'react'
import SideBar from './SideBar'
import { useNavigate } from 'react-router-dom';


function AddMachine() {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [fetures, setFetures] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState("");
  const [weight, setWeight] = useState("");
  const [discount, setDiscount] = useState("");
  const [warrenty, setWarrenty] = useState("");
  const [guarantee, setGuarantee] = useState("");
  const [sell, setSell] = useState("false");
  const [rent, setRent] = useState("false");

  async function addmachine() {

    let formdata = {
      "name": name,
      "industry": industry,
      "price": price,
      "description": description,
      "fetures": fetures,
      "details": {
        "lenght": length,
        "weight": weight
      },
      "discount": discount,
      "warrenty": warrenty,
      "guarantee": guarantee,
      "sell": sell,
      "rent": rent
    }

    let result = await fetch("http://localhost:8000/api/machine/", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formdata)
    });
    result = await result.json();
    console.log("result", result)
    localStorage.setItem("machine_info", JSON.stringify(result));

    history(`/machinelist`)


  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3">
          <SideBar />
        </div>
        <div className="col-md-9 mt-5">
          <div className='col-sm-8 offset-sm-2' style={{ margintop: 100 }}>
            <h1 className='py-3'>Upload Your Machine Details</h1>
            <label for="colFormLabel" className="col-1 mt-1">Name:</label>
            <input type="text" className='form-control' value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />
            <label for="colFormLabel" className="col-sm-3 col-form-label mt-2">Price:</label>
            <input type="number" className='form-control' value={price} placeholder='price' onChange={(e) => setPrice(e.target.value)} />
            <label for="colFormLabel" className="col-sm-3 col-form-label mt-2">Description:</label>
            <textarea type="text" className='form-control' value={description} placeholder='description' onChange={(e) => setDescription(e.target.value)} />
            <label for="colFormLabel" className="col-sm-3 col-form-label mt-2">Features</label>
            <textarea type="text" className='form-control' value={fetures} placeholder='features' onChange={(e) => setFetures(e.target.value)} />

            <label for="colFormLabel" className="col-sm-3 col-form-label mt-2">Length:</label>
            <input type="number" className='form-control' value={length} placeholder='length' onChange={(e) => setLength(e.target.value)} />
            <label for="colFormLabel" className="col-sm-3 col-form-label mt-2">Weight:</label>
            <input type="number" className='form-control' value={weight} placeholder='weight' onChange={(e) => setWeight(e.target.value)} />

            <label for="colFormLabel" className="col-sm-3 col-form-label mt-2">Discount:</label>
            <input type="number" className='form-control' value={discount} placeholder='discount' onChange={(e) => setDiscount(e.target.value)} />
            <label for="colFormLabel" className="col-sm-3 col-form-label mt-2">Warrenty:</label>
            <input type="number" className='form-control' value={warrenty} placeholder='warrenty' onChange={(e) => setWarrenty(e.target.value)} />
            <label for="colFormLabel" className="col-sm-3 col-form-label mt-2">Guarentee:</label>
            <input type="number" className='form-control' value={guarantee} placeholder='guarentee' onChange={(e) => setGuarantee(e.target.value)} />
            <label for="colFormLabel" className="col-sm-3 col-form-label mt-2">Indsutry Number:</label>
            <input type="number" className='form-control' value={industry} placeholder='choose your industry number' onChange={(e) => setIndustry(e.target.value)} /><br />
            <input type="checkbox" value={sell} onChange={(e) => setSell(e.target.checked)} />
            <label for="sell">Sell</label><br />
            <input type="checkbox" value={rent} onChange={(e) => setRent(e.target.checked)} />
            <label for="rent"> Rent</label><br />
            <button onClick={addmachine} className='btn btn-primary'>Add Product</button>
          </div>
        </div>
      </div>
    </div>



  )
}

export default AddMachine;