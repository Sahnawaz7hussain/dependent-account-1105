import "./App.css";

import WithSubnavigation from "./Components/Navbar";
import FilterComponent from "./Components/Productspage/FilterComponent";
import { ProductComponent } from "./Components/Productspage/ProductComponent";
import { ProductDetails } from "./Components/Productspage/ProductDetails";
// import Card from "./Components/Productspage/Card"
import {ProductsPage} from './Pages/Productspage';
import {SiderBar} from './Components/Productspage/SiderBar';

import Homepage from "./Pages/Homepage";

import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">

      <WithSubnavigation />
      {/* <ProductsPage /> */}
      {/* <ProductComponent /> */}
      {/* <SiderBar /> */}
    {/* <Card /> */}

      <MainRoutes />
      </div>
  )
  }

  export {App}