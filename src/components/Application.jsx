import React from "react";
import Navbar from "./Navbar";
import AllProduct from "./Allproducts/AllProduct";
import { BrowserRouter, Route, Routes } from "react-router";
import Appliances from "./Electronics/Appliances";
import MenClothing from "./MensClothing/MenClothing";
import FemaleClothing from "./WomensClothing/FemaleClothing";
import Jewelry from "./Jewelry/Jewelry";
function Application() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllProduct />} />
        <Route path="/electronics" element={<Appliances />} />
        <Route path="/menclothing" element={<MenClothing />} />
        <Route path="/womenclothing" element={<FemaleClothing />} />
        <Route path="/jewelry" element={<Jewelry />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Application;
