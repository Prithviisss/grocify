import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Page content */}
      <div style={{ flex: 1, paddingTop: "14vh" }}>
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
