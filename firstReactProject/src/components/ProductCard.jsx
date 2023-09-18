import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import ProductDetails from "./ProductDetails";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";

function ProductCard(props) {
  const { product } = props;
  const [showDetails, setShowDetails] = useState(false);
const navigateTo = useNavigate()
  const handleButtonClick = () => {
    setShowDetails(true);
    
  };

//   const handleCloseClick = () => {
//     setShowDetails(false);
//   };

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div className="topInnerText">
            <h5>{product.title}</h5>
          </div>
          <Link to={`${product.id}`}>
          <img
            src={product.image}
            
            alt="Avatar"
            style={{ width: "390px", height: "390px" }}
            
          />
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
    </div>
  );
}

export default ProductCard;
