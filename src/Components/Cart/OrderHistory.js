import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { Link } from 'react-router-dom'
import { HiArrowLeft } from "react-icons/hi"
import { Col, Image, ListGroup, Row } from "react-bootstrap";
// import { AiFillDelete } from "react-icons/ai";

const OrderHistory = () => {

  const [orderitem, setOrderItem] = useState([]);

  const fetchData = () => {
    axios.get("orders")
      .then(response => {
        console.log("order history list", response.data);
        setOrderItem(response.data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Link to="/homepagefarmer" style={{ textDecoration: "none", color: "black" }}>
        <p style={{ fontSize: 20 }}><HiArrowLeft />Continue Shopping</p>
      </Link>
      <div style={{ marginTop: 10, marginLeft: 25 }}>
        <p className="fs-1 fw-bold mb-0">Order History</p>
      </div>
      < ListGroup >
        {
          orderitem.map((data) => (
            <ListGroup.Item key={data.id}
            >
              <Row
                className="d-flex align-items-center justify-content-center"
              >
                <Col md={3} >
                  <Image src={data.machine.image} alt={data.machine.name} fluid rounded />
                </Col>
                <Col md={2} >
                  <span >{data.machine.name}</span>
                </Col>
                <Col md={2}>₹ {data.machine.sell_price}</Col>
                <Col md={2} >
                  <span> Quantity: {data.quantity}</span>
                </Col>
                <Col md={2}>
                  <span> Status: "{data.status}"</span>
                </Col>
              </Row>
            </ListGroup.Item>
          ))
        }
      </ListGroup>
    </>
  )
}

export default OrderHistory