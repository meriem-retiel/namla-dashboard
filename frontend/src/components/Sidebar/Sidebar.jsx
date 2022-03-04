import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Sidebar.css";

const Sidebar = ({ items = [] }) => {
  return (
    <Navbar className="mx-0 col-2 sidebar-h-100" bg="dark" variant="dark">
      <Container>
        <Nav defaultActiveKey="/home" className="flex-column">
          {items.map((item, key) => (
            <Nav.Link key={key} href={item.href}>
              {item.name}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
