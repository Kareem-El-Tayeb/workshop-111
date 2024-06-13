import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeComponent from "./Routes/HomeComponent";
import ProductsComponent from "./Routes/ProductsComponent";
import AboutComponent from "./Routes/AboutComponent";
import Cart from "./Routes/Cart";
import Register from "./Components/Log/Register";
import Login from "./Components/Log/Login";
import { useSelector } from "react-redux";
function App() {
  // const isLogged = useSelector((x) => x.user);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/home" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/products" element={<ProductsComponent />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
