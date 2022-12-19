import React from "react";
import { Route, Routes } from "react-router-dom";
import AddressForm from "../Components/Checkoutpage/AddressForm";
import Cartpage from "../Pages/Cartpage";
import Checkoutpage from "../Pages/Checkoutpage";
import Homepage from "../Pages/Homepage";
import { ProductDetails } from "../Components/Productspage/ProductDetails";
import { ProductsPage } from "../Pages/Productspage";
import Loginpage from "../Pages/Loginpage";
import Signuppage from "../Pages/Signuppage";
import AuthRoute from "./AuthRoute";
import OrderSuccess from "../Pages/OrderSuccess";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/cart"
          element={
            <AuthRoute>
              <Cartpage />
            </AuthRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <AuthRoute>
              {" "}
              <Checkoutpage />
            </AuthRoute>
          }
        />
        <Route
          path="/address"
          element={
            <AuthRoute>
              {" "}
              <AddressForm />
            </AuthRoute>
          }
        />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/singleproduct/:id" element={<ProductDetails />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/ordersuccess" element={<OrderSuccess />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
