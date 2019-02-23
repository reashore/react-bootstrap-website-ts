import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const MenuBar: React.SFC = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="news">News</Nav.Link>
        <Nav.Link href="about">About</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default MenuBar;
