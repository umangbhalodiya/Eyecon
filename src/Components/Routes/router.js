import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/",
    // element: <PlayList />,
  },
]);
