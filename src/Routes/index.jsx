import { Route, Routes } from "react-router-dom";
import Layout from "../layout/layout";
import HomePage from "../pages/home";
import Login from "../pages/login/login";
import Register from "../pages/login/register";

const RoutesPublic = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
}

export default RoutesPublic