// src/actions/stockActions.js

import axios from "axios";

export const fetchStocks = () => async (dispatch) => {
  try {
    const response = await axios.get("https://api.upstox.com/v2");
    dispatch({ type: "FETCH_STOCKS_SUCCESS", payload: response.data });
  } catch (error) {
    dispatch({ type: "FETCH_STOCKS_FAILURE", payload: error.message });
  }
};
