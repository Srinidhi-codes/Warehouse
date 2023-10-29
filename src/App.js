import React from 'react';
import WarehouseList from './components/WarehouseList';
import WarehouseDetails from './components/WarehouseDetails';
import { Routes, Route } from "react-router-dom";
import warehouses from "./warehouse.json"
import About from './components/About';


const App = () => {
  return (
    <div>
      <Routes>
    <Route path="/" element={ <WarehouseList warehouses={warehouses} />} />
    <Route path="/details/:id" element={<WarehouseDetails />} />
    <Route path="/about" element={<About />} />
</Routes>
</div>
  )
}

export default App