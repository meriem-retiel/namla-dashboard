import React from "react";
import Topbar from "../components/topbar/Topbar";
import ROUTES, { RenderRoutes } from "../routing/routes";
import Sidebar from "../components/Sidebar/Sidebar";
export const Layout = () => {
  return (
    <>
      <Topbar logo="Namla" routes={ROUTES} />
      <Sidebar />
    </>
  );
};
