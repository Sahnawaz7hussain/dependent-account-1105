import "./App.css";
import { Navbar } from "./Components/Navbar";
import Homepage from "./Pages/Homepage";

import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <Homepage />
      <MainRoutes />
    </div>
  );
}

export default App;
