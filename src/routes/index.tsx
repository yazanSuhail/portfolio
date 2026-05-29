import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import { routes } from "./main.routes";
import React from "react";
import SiteSeo from "../components/Seo/SiteSeo";

function Routes() {
  const allRoutes = useRoutes(routes);
  return (
    <>
      <SiteSeo />
      {allRoutes}
    </>
  );
}

function RoutesApp() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export { RoutesApp };
