import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <h3>Layout</h3>
      <Outlet />
    </div>
  );
};

export default Layout;
