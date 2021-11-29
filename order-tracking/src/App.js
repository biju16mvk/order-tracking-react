import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import OrderDetails from "./components/OrderDetails/OrderDetails";
import OrdersList from "./components/OrdersList/OrdersList";
import OrderTrackingForm from "./components/OrderTrackingForm/OrderTrackingForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<OrderTrackingForm />} />
        <Route exact path="/orders" element={<OrdersList />} />
        <Route exact path="/order/:id" element={<OrderDetails />} />
      </Routes>
    </div>
  );
}

export default App;
