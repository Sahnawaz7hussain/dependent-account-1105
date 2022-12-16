import "./App.css";
import WithSubnavigation from "./Components/Navbar";
import Homepage from "./Pages/Homepage";

import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div className="App">
      <WithSubnavigation />
      <MainRoutes />
    </div>
  );
}

export default App;
