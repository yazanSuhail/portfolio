import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./main.routes";
import React from "react";

function Routes() {
  const allRoutes = useRoutes(routes);
  return allRoutes;
}

function RoutesApp() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export { RoutesApp };
