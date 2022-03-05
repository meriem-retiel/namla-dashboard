import React from "react";
import { Container, Row } from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";
import ROUTES, { getSubroutes, RenderRoutes } from "../routing/routes";

export const Section = ({ routeKey }) => {
  return (
    <>
      <Row className="fill-height">
        <Sidebar routes={getSubroutes(ROUTES, routeKey)} />
        <Container className="mx-0 mt-5 pt-4 col-10">
          <RenderRoutes routes={getSubroutes(ROUTES, routeKey)} />
        </Container>
      </Row>
    </>
  );
};
