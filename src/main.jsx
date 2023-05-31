import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";

import HouseContextProvider from "./components/HouseContextProvider.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { router } from "./Routes/Router.jsx";
import { Toaster } from "react-hot-toast";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Toaster />
    <HouseContextProvider>
      <RouterProvider router={router} />
    </HouseContextProvider>
  </AuthProvider>
);
