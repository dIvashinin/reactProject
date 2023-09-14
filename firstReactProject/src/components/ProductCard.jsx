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
            style={{ width: "390px", height: "390px" }}
          />
          <h5>{product.title}</h5>
          {/* <p>{product.category}</p> */}
          <p>New price: {product.price} €</p>
          <p className="originalPrice">
            Originally: <span style={{color: 'orange', fontSize: '1.1rem', textDecoration:'line-through'}}>
            {product.price*2} € 
            </span><span style={{fontSize:'1.2rem'}}> -50%</span></p>
          <p className="MwSt">VAT included</p>
          {/* <p>{product.description}</p> */}
          <button>more about</button>
          <button>add to cart</button>

        </div>
        {/* <div className="flip-card-back"> */}
          {/* <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>Price: {product.price} EUR</p> */}
          {/* <h2>{product.description}</h2> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default ProductCard;
