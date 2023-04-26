import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, NavLink, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";

function App() {
  return (
    <>
      <nav className="p-2">
        <ul className="nav nav-pills border border-info p-1">
          <li>
            <Link to={"/"} className="btn btn-outline-info ms-1">
              Home
            </Link>
            <Link to={"/products"} className="btn btn-outline-info ms-1">
              Products
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Product></Product>}></Route>
      </Routes>
    </>
  );
} // MALTEM => assurence

export default App;
