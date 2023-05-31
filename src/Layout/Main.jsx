import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Main = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
