import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Sidebar = ({ routes = [] }) => {
  return (
    <Navbar
      className="mx-0 col-2 col-12 col-sm-2 sidebar-h-100"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Nav defaultActiveKey="/home" className="flex-column ">
          {routes.map((item) => (
            <Link
              className="link text-light my-1"
              key={item.key}
              to={item.path}
            >
              {item.name}
            </Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
