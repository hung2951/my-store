import { Outlet } from "react-router-dom";
import Footer from "../components/clients/footer"
import Header from "../components/clients/header"

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
    </>
  );
}

export default Layout