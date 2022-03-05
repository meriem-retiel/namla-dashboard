import React from "react";
import Topbar from "../components/topbar/Topbar";
import ROUTES from "../routing/routes";
export const Layout = () => {
  return (
    <>
      <Topbar logo="Namla" routes={ROUTES} />
    </>
  );
};
