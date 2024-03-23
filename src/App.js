// src/App.js

import React from "react";
import { Provider } from "react-redux";
import StockList from "./components/StockList";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Stock Market App</h1>
        <StockList />
      </div>
    </Provider>
  );
}

export default App;
