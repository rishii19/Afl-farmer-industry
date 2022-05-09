import React, { useState } from 'react'


function AddMachine() {
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
      "name" : name,
      "industry" : industry,
      "price" :price,
      "description" : description ,
      "fetures" : fetures,
      "details" :{
          "lenght": length ,
          "weight": weight
      },
      "discount" : discount,
      "warrenty": warrenty,
      "guarantee": guarantee ,
      "sell": sell ,
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

  }
  return (
    <div className='col-sm-6 offset-sm-2' style={{ margintop: 100 }}>
      <h1>Upload A Product</h1>
      <input type="text" className='form-control' value={name} placeholder='name' onChange={(e) => setName(e.target.value)} /><br />
      <input type="number" className='form-control' value={price} placeholder='price' onChange={(e) => setPrice(e.target.value)} /><br />
      <textarea type="text" className='form-control' value={description} placeholder='description' onChange={(e) => setDescription(e.target.value)} /><br />
      <textarea type="text" className='form-control' value={fetures} placeholder='features' onChange={(e) =>setFetures(e.target.value)} /><br />
      <div >
        <input type="number" className='form-control' value={length} placeholder='length' onChange={(e) => setLength(e.target.value)} /><br />
        <input type="number" className='form-control' value={weight} placeholder='weight' onChange={(e) => setWeight(e.target.value)} /><br />
      </div>
      <input type="number" className='form-control' value={discount} placeholder='discount' onChange={(e) => setDiscount(e.target.value)} /><br />
      <input type="number" className='form-control' value={warrenty} placeholder='warrenty' onChange={(e) => setWarrenty(e.target.value)} /><br />
      <input type="number" className='form-control' value={guarantee} placeholder='guarentee' onChange={(e) => setGuarantee(e.target.value)} /><br />
      <input type="number" className='form-control' value={industry} placeholder='choose your industry number' onChange={(e) => setIndustry(e.target.value)} /><br />
      <input type="checkbox" value={sell} onChange={(e) => setSell(e.target.checked)} />
      <label for="sell">Sell</label><br />
      <input type="checkbox" value={rent} onChange={(e) => setRent(e.target.checked)} />
      <label for="rent"> Rent</label><br />
      <button onClick={addmachine} className='btn btn-primary'>Add Product</button>
    </div>

  )
}

export default AddMachine;