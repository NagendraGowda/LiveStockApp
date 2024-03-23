// src/reducers/index.js

import { combineReducers } from "redux";
import stockReducer from "./stockReducer";

const rootReducer = combineReducers({
  stocks: stockReducer,
});

export default rootReducer;
