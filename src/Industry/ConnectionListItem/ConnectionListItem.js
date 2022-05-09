import React from "react";
import "./ConnectionListItem.css";
import Alex from "../Images/Alex.png";

const BuyerListItem = () => (
  <div className="itemHolder">
    <img src={Alex}></img>
    <div className="nameStatus">
      <span>Chadler Bing</span>
      <p>Updated 1 day ago</p>
    </div>
    <div className="locationTime">
      <span>1 Month</span>
      <p>25 January 2022</p>
    </div>
  </div>
);
export default BuyerListItem;
