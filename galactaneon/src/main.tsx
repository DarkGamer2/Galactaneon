import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Cosplay from "./pages/Cosplay";
import Events from "./pages/Events";
import GetTickets from "./pages/GetTickets";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/cosplay",
    element: <Cosplay />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/gettickets",
    element: <GetTickets />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);