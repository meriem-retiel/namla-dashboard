import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ routes = [] }) => {
  return (
    <Navbar className="mx-0 col-2 sidebar-h-100" bg="dark" variant="dark">
      <Container>
        <Nav defaultActiveKey="/home" className="flex-column ">
          {routes.map((item) => (
            <NavLink key={item.key} to={item.path}>
              {item.name}
            </NavLink>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
