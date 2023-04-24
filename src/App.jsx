import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PropertyDetails from "./pages/PropertyDetails";
import Login from "./components/Login";
import SingUp from "./components/SingUp";

const App = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-white">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
