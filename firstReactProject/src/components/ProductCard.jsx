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
    <Col xs ={4} sm={4} md={3} lg={3} xl={3} className="card-inside">
        {/* <div className="card-inside"> */}
        
      {/* <div className=""> */}
        {/* <div className="image-container"> */}
          {/* <div className="topInnerText"> */}
            {/* <h5>{product.title}</h5> */}
          {/* </div> */}
          {/* <Link to={`${product.id}`}> */}
          <Image className="image-responsive"
            src={product.image} 
            alt="Avatar"
            // style={{ width: "200px", height: "250px" }}  
          />
            {/* <div className="hover-text"> */}
          {/* Additional text to display on hover */}
          {/* <p>click for details</p> */}
        {/* </div> */}
          {/* </Link> */}
          {/* <div className="favorite-icon">
            <FontAwesomeIcon icon={faHeart} />
          </div> */}
          {/* <div className="insideCard"> */}
            <div className="stuff-inside-card">
            {product.category}
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
