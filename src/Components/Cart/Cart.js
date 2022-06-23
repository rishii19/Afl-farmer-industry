import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BiArrowBack } from "react-icons/bi"
import axios from '../../api/axios'
import CartItem from './CartItem';


const Cart = () => {

  const history = useNavigate();
  const [cartlist, setCartlist] = useState([]);
  // const [btn ,setBtn] = useState('disable')

  const totalPrice = cartlist.reduce((total, item) => total + (item.machine.sell_price * item.quantity), 0);
  const totalQuantity =cartlist.reduce((total,item)=> total + (item.quantity),0);

  const products = () => axios.get("cart")
    .then(res => {
      setCartlist(res.data);
    }).then(
  ).catch(e => {
    console.log(e);
  });

  useEffect(() => {
    products();
  }, []);


  const checkout = () => {
    axios.get(`/cart/checkout`)
      .then(res => {
        console.log("orderplaced")
      }).catch(e => {
        console.log(e);
      })
    history('/ordersuccessful')
  }

  const handleAddToCart = async (e, id, quantity) => {
    e.preventDefault()
    await axios.put(`/cart-items/${id}`, {
      quantity
    })
    products();
  }

  function removeItem(id) {
    axios.delete(`/cart-items/${id}`, {
    }).then(() => {
      products();
    })
      .catch(e => {
        console.log(e);
      })

  }

  const ShowCartItems = ({items}) => {
    console.log(items, typeof items);
    return (
      <>
        {
          items.map((data) => (
            <CartItem item={data} onSubmit={handleAddToCart}
              onDelete={removeItem} />
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
            <ShowCartItems items={cartlist} />
          </div>
        </div>
        <div className="d-grid d-md-flex justify-content-md-end">
          {/* <span className="fs-1 fw-semibold text-right" style={{ fontWeight: 700, fontSize: 20 }}>Total Quantity: {totalQuantity}</span> */}
          <span className="fs-1 fw-semibold text-right" style={{ fontWeight: 700, fontSize: 20 }}>Total Price: {totalPrice}.00₹</span>
        </div>
        <hr />
        <div className="d-grid d-md-flex justify-content-md-end">
          <button className="btn btn-outline-dark btn-lg fw-bold" id='btnsubmit' disabled={totalQuantity===0}
            onClick={() => { checkout() }}>Checkout</button>
        </div>
      </div>
    </>
  )
}

export default Cart
