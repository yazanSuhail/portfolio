import React from "react";
import { RouteObject } from "react-router-dom";

import Desktop from "../pages/Desktop";
import LoginWindowsInterface from "../pages/LoginWindowsInterface";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Desktop />,
  },
  {
    path: "/lol",
    element: <LoginWindowsInterface />,
  },
];

export { routes };
