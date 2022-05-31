import React, { useState } from 'react'
import SideBar from './SideBar'
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';


function AddMachine() {
  const history = useNavigate();
  const [file, setFile] = useState([]);
  const [name, setName] = useState("");
  const [industry, setIndustry] = useState("");
  const [fetures, setFetures] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [length, setLength] = useState("");
  const [weight, setWeight] = useState("");
  const [discount, setDiscount] = useState("");
  const [warranty, setWarrenty] = useState("");
  const [guarantee, setGuarantee] = useState("");
  const [sell, setSell] = useState("false");
  const [rent, setRent] = useState("false");

  const formData = new FormData();

  async function addmachine(e) {
    e.preventDefault()
    let formdata = {
      "name": name,
      // "industry": industry,
      "sell_price": price,
      "description": description,
      "details": JSON.stringify({
        "length": length,
        "weight": weight
      }),
      "discount": discount,
      "warranty": warranty,
      "guarantee": guarantee,
      "for_sale": sell,
      "for_rent": rent,
      "image": file
    }

    for (const [key, value] of Object.entries(formdata)) {
      formData.append(key, value)
      console.log(key, value);
    }

    let {data} = await axios.post("machines/",  formData);
    console.log("data", data)
    localStorage.setItem("machine_info", JSON.stringify(data));
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
            <form onSubmit={addmachine}>
            <label htmlFor="colFormLabel" className="col-1 mt-1 fw-bolder">Name:</label>
            <input type="text" className='form-control' value={name} placeholder='name' onChange={(e) => setName(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Price:</label>
            <input type="number" className='form-control' value={price} placeholder='price' onChange={(e) => setPrice(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Description:</label>
            <textarea type="text" className='form-control' value={description} placeholder='description' onChange={(e) => setDescription(e.target.value)} />
            {/* <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Features</label> */}
            {/* <textarea type="text" className='form-control' value={fetures} placeholder='features' onChange={(e) => setFetures(e.target.value)} /> */}
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Length:</label>
            <input type="number" className='form-control' value={length} placeholder='length' onChange={(e) =>{ 
              setLength(parseInt(e.target.value))
              // console.log(e.target.value, typeof(e.target.value))
          
          } }/>
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Weight:</label>
            <input type="number" className='form-control' value={weight} placeholder='weight' onChange={(e) => setWeight(parseInt(e.target.value))} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Discount:</label>
            <input type="number" className='form-control' value={discount} placeholder='discount' onChange={(e) => setDiscount(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Warranty:</label>
            <input type="number" className='form-control' value={warranty} placeholder='warranty' onChange={(e) => setWarrenty(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Guarentee:</label>
            <input type="number" className='form-control' value={guarantee} placeholder='guarentee' onChange={(e) => setGuarantee(e.target.value)} />
            <label htmlFor="colFormLabel" className="col-sm-3 col-form-label mt-2 fw-bolder">Indsutry Number:</label>
            {/* <input type="number" className='form-control' value={industry} placeholder='choose your industry number' onChange={(e) => setIndustry(e.target.value)} /><br /> */}
            <label htmlFor="formFile" className="form-label col-sm-3 col-form-label fw-bolder">Uplaod Image</label>
            <input  type="file"   onChange={(e) => setFile(e.target.files[0])}></input> <br />
            {/* <label htmlFor="colFormLabel" className="col-sm-3 col-form-label fw-bolder">Image</label> */}
            {/* <input type="file" className='form-control' value={file} placeholder='file' onChange={(e) => setFile(e.target.files[0])} /><br /> */}
            <input type="checkbox" value={sell} onChange={(e) => setSell(e.target.checked)} />
            <label htmlFor="sell">Sell</label><br />
            <input type="checkbox" value={rent} onChange={(e) => setRent(e.target.checked)} />
            <label htmlFor="rent"> Rent</label><br />
            <button type='submit' className='btn btn-primary'>Add Product</button>
            </form>
          </div>
        </div>
      </div>
    </div>



  )
}

export default AddMachine;