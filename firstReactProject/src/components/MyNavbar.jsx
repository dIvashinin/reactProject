import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function MyNavbar() {
  return (
    <nav>
        <NavLink to="/">Home</NavLink> | <NavLink to="products">Products</NavLink> | <NavLink to="about">About</NavLink> | <NavLink to="register">Register</NavLink> | <NavLink to="login">Login</NavLink>
    </nav>
  )
}

export default MyNavbar