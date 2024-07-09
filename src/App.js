/** @format */

import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar/navbar"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./component/Dashboard/dashboard"; 
import AddtoCart from "./component/AddtoCart/addtoCart"; 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addtocart" element={<AddtoCart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
