import React, { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import axios from "../api/axios";

function EditMachine() {
    const { id } = useParams();
  const history = useNavigate();
  const [file, setFile] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rent_price, setRent_price] = useState("");
  const [discount, setDiscount] = useState("");

  const formData = new FormData();
  const getProductDetails = async () => {
    const { data } = await axios.get(`/machines/${id}`)
    // console.log(data)
    setName(data.name)
    setRent_price(data.rent_price)
    setDescription(data.description)
    setDiscount(data.discount)
    setFile(data.image)

  }
  useEffect(() => {
    getProductDetails()
  }, [])
  async function editmachine(e) {
    e.preventDefault();
    let formdata = {
      "name": name,
      "description": description,
      "discount": discount,
      "rent_price": rent_price,
      
    };
    if (typeof (file) !== "string") {
        formdata["image"] = file
        console.log('hello')
      }
      for (const [key, value] of Object.entries(formdata)) {
        formData.append(key, value)
        console.log(key, value);
      }

    

    await axios.patch(`/machines/${id}`,formData )
    alert('product updated successfully')
    history(`/mymachines`)


  }
  return (
    <>
      <div className="container">
        <div className="row justify-content-evenly">
          
          <div className="col-md-8 col-sm-12">
            {/* <div className="col-sm-8 offset-sm-2" style={{ margintop: 100 }}> */}
            <h1 className="py-2 text-center border-bottom shadow-sm mb-4 p-1 bg-body rounded" style={{ color: "#172578 " }}>Update Your Machine Details</h1>
            <form onSubmit={editmachine}>
              <label htmlFor="colFormLabel" className="col-1 mt-1 fw-bolder">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                value={name}
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="colFormLabel"
                className="col-sm-3 col-form-label mt-2 fw-bolder"
              >
                Description:
              </label>
              <textarea
                type="text"
                className="form-control"
                value={description}
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
              />

              <label
                htmlFor="colFormLabel"
                className="col-sm-3 col-form-label mt-2 fw-bolder"
              >
                Rent_price:
              </label>
              <input
                type="number"
                required
                className="form-control"
                value={rent_price}
                placeholder="rent_price"
                onChange={(e) => setRent_price(e.target.value)}
              />
              <label
                htmlFor="colFormLabel"
                className="col-sm-3 col-form-label mt-2 fw-bolder"
              >
                Discount:(%)
              </label>
              <input
                type="number"
                required
                className="form-control mb-2"
                value={discount}
                placeholder="discount"
                onChange={(e) => setDiscount(e.target.value)}
              />
              <label
                htmlFor="formFile"
                className="form-label col-sm-3 col-form-label fw-bolder"
              >
                Upload Image
              </label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])}></input> <br />
              <img src={file} style={{ width: 400, height: 300 }} alt=" Current Uploaded" />
              <p style={{ marginLeft: 160 }}>Uploaded Image</p>
              <button type="submit" className="btn btn-primary">
                Update Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditMachine;
