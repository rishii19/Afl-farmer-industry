import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';

const OrderHistory = () => {


    const fetchData = () => {
        axios.get("orders")
            .then(response => {
                console.log("order history list", response.data);
                // setResidues(response.data);
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

  return (
    <div>OrderHistory</div>
  )
}

export default OrderHistory