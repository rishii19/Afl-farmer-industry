import React, { useEffect,useState } from 'react'
import axios from '../../api/axios'

const Cart = () => {

   const [first, setfirst] = useState(" ")
   const [quantity, setQuantity] = useState(" ")

  const products = () => axios.get("cart")
    .then(res => {
      console.log("Cart list", res.data)
    })
    .catch(e => (e))

  useEffect(() => {
    products();
  }, []);


  function removeItem(id) {
    axios.delete(`/cart-items/${id}`, {
    }).then(() => {
        alert("Machine Deleted Successfully")
    })
   
}


  return (
    <div>
      Cart Page
      create a list and Add sum checkout.
    </div>
  )
}

export default Cart
