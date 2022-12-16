import React from "react";
import { Route, Routes } from "react-router-dom";
import AddressForm from "../Components/Checkoutpage/AddressForm";
import Cartpage from "../Pages/Cartpage";
import Checkoutpage from "../Pages/Checkoutpage";
import Homepage from "../Pages/Homepage";
import { ProductDetails } from "../Components/Productspage/ProductDetails";
import { ProductsPage } from "../Pages/Productspage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cartpage />} />
        <Route path="/checkout" element={<Checkoutpage />} />
        <Route path="/address" element={<AddressForm />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/singleproduct/:id" element={<ProductDetails />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
