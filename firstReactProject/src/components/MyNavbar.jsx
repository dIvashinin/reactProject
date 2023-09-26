import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {

  const {user, setUser, logout} = useContext (AuthContext);

  return (

    //bootstrap
    <>
    <Navbar bg="light" data-bs-theme="light" sticky="top">
        <Container fluid>
          <Navbar.Brand href="/">FAKE.STORE</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="products">Products</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="register">Register</Nav.Link>
            <Nav.Link href="login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>

    // my first variant
    // <nav>
    //   <NavLink to="/">Home</NavLink> | <NavLink to="products">Products</NavLink>{" "}
    //   | <NavLink to="about">About</NavLink> |{" "}
    //   <NavLink to="register">Register</NavLink> |{" "}
    //   <NavLink to="login">Login</NavLink>
    // </nav>
  );
}

export default MyNavbar;
