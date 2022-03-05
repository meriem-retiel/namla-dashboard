import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import ROUTES, { getSubroutes, RenderRoutes } from "../routing/routes";

export const Section = ({ routeKey }) => {
  return (
    <>
      <Sidebar routes={getSubroutes(ROUTES, routeKey)} />
      <RenderRoutes routes={getSubroutes(ROUTES, routeKey)} />
    </>
  );
};
