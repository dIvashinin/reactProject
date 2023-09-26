import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import ProductDetails from "./ProductDetails";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

function ProductCard(props) {
  const { product } = props;
  console.log("hello");
  const [showDetails, setShowDetails] = useState(false);
const navigateTo = useNavigate()
  const handleButtonClick = () => {
    setShowDetails(true);
    
  };

//   const handleCloseClick = () => {
//     setShowDetails(false);
//   };

  return (
    
    // here goes bootstrap grid
    



   // my initial card 
    <Col xs ={12} sm={6} md={4} lg={3} xl={3} className="card-inside">
        {/* <div className="card-inside"> */}
        
      {/* <div className=""> */}
        {/* <div className="image-container"> */}
          {/* <div className="topInnerText"> */}
            {/* <h5>{product.title}</h5> */}
          {/* </div> */}
          <Link to={`${product.id}`}>
          <Image className="image-responsive"
            src={product.image} 
            alt="Avatar"
            style={{ width: "220px", height: "270px" }}  
          />
            <div className="hover-text">
          {/* Additional text to display on hover */}
          <p>click for details</p>
        </div>
          </Link>
        
          {/* <div className="insideCard"> */}
            <div className="stuff-inside-card">
            {/* {product.category} */}
            <h6>{product.title}</h6>
            <p>New price: {product.price.toFixed(2)} €</p>
            <p className="originalPrice">
              Originally:{" "}
              <span
                 style={{
                    color: "orange",
                   fontSize: "1.1rem",
                   textDecoration: "line-through",
                  }}
               >
                {(product.price * 2).toFixed(1)} €
              </span>
              <span style={{ fontSize: "1.2rem" }}> -50% off</span>
            </p>
            {/* <p className="MwSt">VAT included</p> */}
            {/* <p>{product.description}</p> */}
          {/* </div> */}
          {/* <button className="cardButton1"
          onClick={()=> {
            navigateTo(`${product.id}`)
          }}
          >more about</button>  */}
        
          <Link className="more" to={`${product.id}`}>more about...</Link>
          <button className="cardButton2">add to cart</button>
          {/*  */}
          {/* <Link> */}
          <div className="icon-container">
            *
          {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        fill="darkred"
        className="bi bi-heart"
        viewBox="0 0 16 16"
      >
        <path d="M8 14s-1.5-2.166-3-3.5C3.5 9.166 2 7 2 4.5 2 2.5 3.5 1 5.5 1c1.305 0 2.498.791 3 1.999C8.002 1.791 9.195 1 10.5 1 12.5 1 14 2.5 14 4.5c0 2.5-1.5 4.666-3 6.5-1.5 1.334-3 3.5-3 3.5z" />
      </svg> */}
          </div>
          {/* </Link> */}
          </div>
        {/* </div> */}
        {/* <div className="flip-card-back"> */}
        {/* <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>Price: {product.price} EUR</p> */}
        {/* <h2>{product.description}</h2> */}
        {/* </div> */}
      {/* </div> */}
      {showDetails && (
        <ProductDetails product={product} onCloseClick={handleCloseClick} />
      )}
      {/* </div> */}
    </Col>
    
  );
}

export default ProductCard;
