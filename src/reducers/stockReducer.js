// src/reducers/stockReducer.js

const initialState = {
  stocks: [],
  loading: false,
  error: null,
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_STOCKS_SUCCESS":
      return {
        ...state,
        stocks: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_STOCKS_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default stockReducer;
