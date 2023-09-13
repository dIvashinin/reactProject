import React from "react";

function ProductCard(props) {
    const {product} = props;
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
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>Price: {product.price} EUR</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
