import React from "react";
import { RouteObject } from "react-router-dom";

import Desktop from "../pages/Desktop";
import LoginWindowsInterface from "../pages/LoginWindowsInterface";

const routes: RouteObject[] = [
  {
    path: "/desktop",
    element: <Desktop />,
  },
  {
    path: "/",
    element: <LoginWindowsInterface />,
  },
];

export { routes };
