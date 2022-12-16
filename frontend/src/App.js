import "./App.css";
import FilterComponent from "./Components/Productspage/FilterComponent";
import { ProductComponent } from "./Components/Productspage/ProductComponent";
import { ProductDetails } from "./Components/Productspage/ProductDetails";
// import Card from "./Components/Productspage/Card"
import {ProductsPage} from './Pages/Productspage';
import {SiderBar} from './Components/Productspage/SiderBar';

function App() {
  return (
    <div className="App">
      {/* <ProductsPage /> */}
      {/* <ProductComponent /> */}
      <ProductDetails />
      {/* <FilterComponent /> */}
      {/* <SiderBar /> */}
    {/* <Card /> */}
    </div>
  );
}

export default App;
