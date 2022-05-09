import React from "react";
import PropTypes from "prop-types";
import "./ConnectionHeader.css";

const BuyerListItemHeader = () => (
  <div className="header">
    <div id="heading1">Connection Name</div>
    <div id="heading2">Connection Since</div>
  </div>
);

BuyerListItemHeader.propTypes = {};

BuyerListItemHeader.defaultProps = {};

export default BuyerListItemHeader;
