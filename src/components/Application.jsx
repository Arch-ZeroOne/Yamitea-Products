import React from "react";
import AllProduct from "./Allproducts/AllProduct";
import { BrowserRouter, Route, Routes } from "react-router";
import Appliances from "./Electronics/Appliances";
import MenClothing from "./MensClothing/MenClothing";
import FemaleClothing from "./WomensClothing/FemaleClothing";
import Jewelry from "./Jewelry/Jewelry";
import ProductInfo from "./Info/ProductInfo";
function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<AllProduct />} />
          <Route path="/electronics" element={<Appliances />} />
          <Route path="/menclothing" element={<MenClothing />} />
          <Route path="/womenclothing" element={<FemaleClothing />} />
          <Route path="/jewelry" element={<Jewelry />} />
          <Route path="/menclothing/product/:id" element={<ProductInfo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Application;
