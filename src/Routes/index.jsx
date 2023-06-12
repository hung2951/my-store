import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import HomePage from "../pages/clients/home";
import Login from "../pages/clients/login/login";
import Register from "../pages/clients/login/register";
import Cart from "../pages/clients/cart";
import ProductDetail from "../pages/clients/productDetail";
import UploadImage from "../components/upload/uploadImage";

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
      <Route path="upload" element={<UploadImage />} />
    </Routes>
  );
}

export default RoutesPublic