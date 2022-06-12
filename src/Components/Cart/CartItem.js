import React, { useState } from 'react'
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";


const CartItem = ({ item, onSubmit, onDelete }) => {

  const [quantity, setQuantity] = useState(item.quantity);

  return (
    <div>
      <ListGroup >
        <ListGroup.Item key={item.id}
        >
          <Row
            className="d-flex align-items-center justify-content-center"
          >
            <Col md={3} >
              <Image src={item.machine.image} alt={item.machine.name} fluid rounded />
            </Col>
            <Col md={3} >
              <span >{item.machine.name}</span>
            </Col>
            <Col md={1}>₹ {item.machine.sell_price}</Col>
            <Col md={3} >
              <Form onSubmit={(e) => onSubmit(e, item.id, quantity)}>
                <div className="row g-1 align-items-center">
                  <div className="col-4">
                    Quantity:
                  </div>
                  <div className="col-4">
                    <label >
                      <input type="number" className="form-control" value={quantity}
                        placeholder="Quantity"
                        onChange={(e) => setQuantity(parseInt(e.target.value))}
                      />
                    </label>
                  </div>
                  <div className="col-4">
                    <input type="submit" className="form-control" value="ADD"/> 
                  </div>
                </div>
              </Form>
              {/* <span> Quantity: {item.quantity}</span> */}
            </Col>
            <Col md={1}>
              <Button type="button " variant="outline-danger" onClick={() => { onDelete(item.id) }}>
                <AiFillDelete fontSize="25px" />
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default CartItem