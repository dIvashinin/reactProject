import React from 'react'
import {Link} from 'react-router-dom'

function MyNavbar() {
  return (
    <nav>
        <Link to="/">Home</Link> | <Link to="products">Products</Link> | <Link to="about">About</Link>
    </nav>
  )
}

export default MyNavbar