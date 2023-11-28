import React from "react";
import { RouteObject } from "react-router-dom";

import MainPage from "../pages/Desktop";
import LoginWindowsInterface from "../pages/LoginWindowsInterface";

const routes: RouteObject[] = [
  {
    path: "/home",
    element: <MainPage />,
  },
  {
    path: "/",
    element: <LoginWindowsInterface />,
  },
];

export { routes };
