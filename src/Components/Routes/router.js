import React from "react";
import { createBrowserRouter } from "react-router-dom";
import About from "./About/about";
import Home from "./Home/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

]);
