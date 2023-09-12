import React from "react";

function ProductCard() {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img
            src={product.image}
            alt="Avatar"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
        <div className="flip-card-back">
          <h1>{product.title}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
