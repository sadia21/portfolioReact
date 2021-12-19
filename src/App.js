import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import Experiance from "./pages/Experiance";

function App() {
  return (
    <div>
      <Navbar />;
      <Home />;
      <Experiance />;
    </div>
  );
}

export default App;
