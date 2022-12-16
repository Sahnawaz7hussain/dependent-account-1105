import "./App.css";

import Navbar from "./Components/Navbar";
import FilterComponent from "./Components/Productspage/FilterComponent";
import { ProductComponent } from "./Components/Productspage/ProductComponent";
import { ProductDetails } from "./Components/Productspage/ProductDetails";
// import Card from "./Components/Productspage/Card"
import {ProductsPage} from './Pages/Productspage';
import {SiderBar} from './Components/Productspage/SiderBar';

import Homepage from "./Pages/Homepage";

import MainRoutes from "./Routes/MainRoutes";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">

      <Navbar />
      {/* <ProductsPage /> */}
      {/* <ProductComponent /> */}
      {/* <SiderBar /> */}
    {/* <Card /> */}

      <MainRoutes />
      <Footer />
      </div>
  )
  }

  export {App}