import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi"
import axios from '../../api/axios'


const Cart = () => {

  const history = useNavigate();
  const [cartlist, setCartlist] = useState([]);
  const [quantity, setQuantity] = useState("");


  const products = () => axios.get("cart")
    .then(res => {
      console.log("Cart list", res.data)
      setCartlist(res.data);
    }).then(
  )
    .catch(e => {
      console.log(e);
    });

  useEffect(() => {
    products();
  }, []);


  const checkout = () => {
    axios.get(`/cart/checkout`)
      .then(res => {
        console.log("orderplaced")
      })
    history('/ordersuccessful')
  }


  const handleAddToCart = (id, quantity) => {
    axios.put(`/cart-items/${id}`, {
      items: [{
        quantity: quantity
      }]
    })
    console.log(id);
  }

  function removeItem(id) {
    axios.delete(`/cart-items/${id}`, {
    }).then(() => {
      // alert("Machine Deleted Successfully")
      products();
    })

  }

  const ShowCartItems = () => {
    return (
      <>
        {
          cartlist.map((data) => (
            <ListGroup >
              <ListGroup.Item key={data.id}
              >
                <Row
                  className="d-flex align-items-center justify-content-center"
                >
                  <Col md={3} >
                    <Image src={data.machine.image} alt={data.machine.name} fluid rounded />
                  </Col>
                  <Col md={3} >
                    <span >{data.machine.name}</span>
                  </Col>
                  <Col md={1}>₹ {data.machine.sell_price}</Col>
                  <Col md={3}>
                    <form onSubmit={handleAddToCart}>
                      <label>
                        Quantity:
                        <input type="number" className="form-control" value={quantity}
                        placeholder="Quantity"
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      </label>
                      <input type="submit" value="Add More" />
                    </form>
                    {/* <span> Quantity: {data.quantity}</span> */}
                  </Col>
                  <Col md={1}>
                    <Button type="button " variant="outline-danger" onClick={() => { removeItem(data.id) }}>
                      <AiFillDelete fontSize="25px" />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          )
          )
        }
      </>
    )
  }

  return (
    <>
      <div>
        <Link to="/homepagefarmer" style={{ textDecoration: "none", color: "black" }}>
          <p><BiArrowBack />Continue Shopping</p>
        </Link>
      </div>
      <div style={{ marginTop: 10, marginLeft: 25 }}>
        <p className="fs-1 fw-bold mb-0">Your Cart</p>
      </div>
      <div className="container">
        <div className="row py-4 justify-content-evenly" >
          <div className="row justify-content-center">
            {<ShowCartItems />}
          </div>
        </div>
        <div className="d-grid d-md-flex justify-content-md-end">
          <span className="fs-1 fw-semibold text-right" style={{ fontWeight: 700, fontSize: 20 }}>Total Price: {cartlist.reduce((total, item) => total + (item.machine.sell_price * item.quantity), 0)}.00₹</span>
        </div>
        <hr />
        <div className="d-grid d-md-flex justify-content-md-end">
          <button class="btn btn-outline-dark btn-lg fw-bold" onClick={() => { checkout() }}>Checkout</button>
        </div>
      </div>
    </>
  )
}

export default Cart
