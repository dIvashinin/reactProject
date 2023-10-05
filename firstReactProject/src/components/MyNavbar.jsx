import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNavbar() {

  // const {user, setUser, logout} = useContext (AuthContext);

  return (

    //bootstrap
    <>
    <Navbar bg="light" data-bs-theme="light" sticky="top">
        <Container fluid>
          <Navbar.Brand to="/" as={NavLink}>FAKE.STORE</Navbar.Brand>
          <Nav className="me-auto">
            {/* redo */}
            <Nav.Link to="/" as={NavLink}>Home</Nav.Link>
            <Nav.Link to="products" as={NavLink}>Products</Nav.Link>
            <Nav.Link to="about" as={NavLink} >About</Nav.Link>
            <div className="login-register">
            <Nav.Link to="chat" as={NavLink}><span style={{ color: "blue" }}>Chat</span></Nav.Link>  
            <Nav.Link to="register" as={NavLink}><span style={{ color: "orange" }}>Register</span></Nav.Link>
            <Nav.Link to="login" as={NavLink}><span style={{ color: "red" }}>Login</span></Nav.Link>
            </div>
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
