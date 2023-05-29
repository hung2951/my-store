import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import HomePage from "../pages/home";
import Login from "../pages/login/login";
import Register from "../pages/login/register";
import Cart from "../pages/cart";
import ProductDetail from "../pages/productDetail";

const RoutesPublic = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="slug" element={<ProductDetail />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default RoutesPublic