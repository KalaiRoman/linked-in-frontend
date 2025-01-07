import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  const { pathname } = useLocation(); 
  const excludePaths = ["/", "/signup"];
  const showNavbar = !excludePaths.includes(pathname);
  return (
    <div className="min-h-screen bg-base-100">
      {showNavbar && <Navbar />}
      <main className="max-w-7xl mx-auto px-4 py-6">{children}</main>
    </div>
  );
};

export default Layout;
