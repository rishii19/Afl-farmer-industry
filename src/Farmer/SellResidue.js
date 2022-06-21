import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import residueimg from '../Farmer/assets/residueimg.jpeg';
import axios from '../api/axios';

function SellResidue() {
  const history = useNavigate();
  const [items, setItems] = useState([]);
  const [type_of_residue, setTypeofresidue] = useState([]);
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const formData = new FormData();

  const fetchTypeOfResidues = () => {
    axios.get("residues/type")
      .then(response => {
        console.log("residues type", response.data);
        setItems(response.data);
      })
      .catch(e => {
        console.log(e);
      })

  }


  useEffect(() => {
    fetchTypeOfResidues();
  }, []);


  async function residues(e) {
    e.preventDefault();
    let formdata = {
      type_of_residue: items,
      price: price,
      quantity: quantity,
    };

    for (const [key, value] of Object.entries(formdata)) {
      formData.append(key, value);
      console.log(key, value);
    }

    await axios.post("residues/", formData);
    // console.log("data", data)
    history(`/residuedetails`)

  }

  return (
    <>
      <div className="container-fluid mt-5" style={{ height: "100%" }}>
        <div className="row justify-content-evenly">
          <div className="col-md-6 col-sm-12 align-self-center">
            <img className="img-fluid" src={residueimg} style={{ width: "300", height: "300" }} />
          </div>
          <div
            className="col-md-6 col-sm-12"
          >
            <h2
              className="text-center fw-bolder"
              style={{ letterSpacing: 2 }}
            >
              SELL RESIDUE
            </h2>
            <form onSubmit={residues} style={{ padding: "30" }}>
              <label htmlFor="colFormLabel" className="col-3 mt-1 fw-bolder">
                Residue Type
              </label>
              <select class="form-select" aria-label="Default select example" onChange={(e) => setTypeofresidue(e.target.value)}>
                <option selected disabled>Select Residue Type</option>
                {
                  items.map((data) =>
                  (
                    <option
                      key={data.id}
                      value={type_of_residue}
                    >{data}
                    </option>
                  ))
                }
              </select>
              {/* <input
                type="text"
                required
                className="form-control"
                value={type_of_residue}
                placeholder="Type of Residue"
                onChange={(e) => setTypeofresidue(e.target.value)}
              /> */}
              <label htmlFor="colFormLabel" className="col-1 mt-1 fw-bolder">
                Quantity:(Kg)
              </label>
              <input
                type="number"
                required
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
                required
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
                Add Residue
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default SellResidue