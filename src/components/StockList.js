// src/components/StockList.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStocks } from "../actions/stockActions";

const StockList = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state) => state.stocks);

  useEffect(() => {
    dispatch(fetchStocks());
  }, [dispatch]);

  return (
    <div>
      <h2>Stocks</h2>
      {Array.isArray(stocks) ? (
        stocks.map((stock) => (
          <div key={stock.symbol}>
            {stock.symbol}: {stock.price}
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default StockList;
