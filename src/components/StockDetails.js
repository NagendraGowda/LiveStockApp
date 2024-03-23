// src/components/StockDetails.js

import React from "react";

const StockDetails = ({ stock }) => {
  return (
    <div>
      <h2>{stock.symbol} Details</h2>
      <div>Price: {stock.price}</div>
      {/* Add more details here */}
    </div>
  );
};

export default StockDetails;
