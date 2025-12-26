import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductDetails from "./pages/productDetails";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

import Login from "./authentication/Login/Login";
import Signup from "./authentication/SignUp/SignUp";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/product/:id" element={<ProductDetails />} />

      <Route path="/cart" element={<Cart />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products" element={<Products />} />

    </Routes>
  );
}

export default App;
