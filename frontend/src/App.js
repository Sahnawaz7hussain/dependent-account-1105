import "./App.css";

import Navbar from "./Components/Navbar";
import FilterComponent from "./Components/Productspage/FilterComponent";
import { ProductComponent } from "./Components/Productspage/ProductComponent";
import { ProductDetails } from "./Components/Productspage/ProductDetails";
// import Card from "./Components/Productspage/Card"
import { ProductsPage } from "./Pages/Productspage";
import { SiderBar } from "./Components/Productspage/SiderBar";

import Homepage from "./Pages/Homepage";
// import  ProductDetails from "./Components/Productspage/ProductDetails";
import MainRoutes from "./Routes/MainRoutes";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <ProductsPage /> */}
      {/* <ProductDetails /> */}
      {/* <ProductComponent /> */}
      {/* <SiderBar /> */}
      {/* <Card /> */}
      <MainRoutes />
    </div>
  );
}

export { App };
