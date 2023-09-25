import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import ProductDetails from "./ProductDetails";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


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
   
    <Col sm={12} md={6} lg={4} xl={3}>
      <div className="">
        {/* Small screens: 1 product per row */}
        <div className="image-container">
          <div className="topInnerText">
            <h5>{product.title}</h5>
          </div>
          <Link to={`${product.id}`}>
          <img className="image-responsive"
            src={product.image}
            
            alt="Avatar"
            // style={{ width: "250px", height: "250px" }}  
          />
            <div className="hover-text">
          {/* Additional text to display on hover */}
          <p>click for details</p>
        </div>
          </Link>
          {/* <div className="favorite-icon">
            <FontAwesomeIcon icon={faHeart} />
          </div> */}
          <div className="insideCard">
            {/* <p>{product.category}</p> */}
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
            <p className="MwSt">VAT included</p>
            {/* <p>{product.description}</p> */}
          </div>
          {/* <button className="cardButton1" 
          onClick={()=> {
            navigateTo(`${product.id}`)
          }}
          >more about</button> */}
        
          <Link className="more" to={`${product.id}`}>more about...</Link>
          <button className="cardButton2">add to cart</button>
        </div>
        {/* <div className="flip-card-back"> */}
        {/* <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>Price: {product.price} EUR</p> */}
        {/* <h2>{product.description}</h2> */}
        {/* </div> */}
      </div>
      {showDetails && (
        <ProductDetails product={product} onCloseClick={handleCloseClick} />
      )}
    </Col>
    
  );
}

export default ProductCard;
