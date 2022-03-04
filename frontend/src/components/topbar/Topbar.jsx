import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Avatar, IconButton, Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
const Topbar = () => {
  return (
    <>
      <Navbar sticky="top" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#">Namla</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Admin</Nav.Link>
            <Nav.Link className="justify-content-right" href="#pricing">
              Analytics
            </Nav.Link>
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
