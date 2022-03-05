import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Avatar, IconButton, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import "./Topbar.css";

const Topbar = ({ logo = "Logo", routes = [] }) => {
  return (
    <>
      <Navbar fixed="top" bg="light" variant="light" className="py-0">
        <Container>
          <Navbar.Brand href="#" className="fw-bold">
            {logo}
          </Navbar.Brand>
          <Nav className="me-auto">
            {routes.map((route) => (
              <Link
                className="link topbar-link me-3"
                key={route.key}
                to={route.path}
              >
                {route.name}
              </Link>
            ))}
          </Nav>
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <Badge badgeContent={4} color="primary">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <Nav.Link href="#profile">
            <Avatar>H</Avatar>
          </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
