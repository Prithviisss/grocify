import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "150px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
