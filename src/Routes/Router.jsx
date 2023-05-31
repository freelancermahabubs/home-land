import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PropertyDetails from "../pages/PropertyDetails";
import Login from "../components/Login";
import Main from "../Layout/Main";
import SingUp from "../components/SingUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/property/:id",
        element: (
          <PrivateRoute>
            <PropertyDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/singup",
        element: <SingUp />,
      },
    ],
  },
]);
