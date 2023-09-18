import React, { useEffect, useState } from 'react'
import {useParams, Link} from "react-router-dom";

function ProductDetails() {
const {productId} = useParams();
const [product, setProduct] = useState(null);
// const {product, onCloseClick} = props;
console.log('productId :>> ', productId);

const fetchSingleProduct = async ()=> {
  try {
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
  if (!response.ok) {
    throw new Error ('response was not ok');
  }
    const data = await response.json();
    setProduct(data);
} catch (error) {
  console.error('error fetching', error);
}
  // console.log('result :>> ', result.image);
};

useEffect(() => {
  fetchSingleProduct()
}, [productId]);

if (!product) {
  return <div>loading...</div>;
}

return (
    <>
      <h1>Details</h1>
      
      <Link to={product/`${product.id}`}>
        <img src={product.image} alt="" style={{ width: "390px", height: "390px" }}/>
        </Link>
      <h2>{product.category}</h2>
      <h2>{product.title}</h2>
      <h4>{product.description}</h4>
      <h5>{product.price}</h5>
      <button>back</button>


      {/* <button onClick={onCloseClick}>Close</button> */}
      </>
  );
  

    // fetch('https://fakestoreapi.com/products/{data.id}')
// };

//   return (
    // <h3>See more info about {productName} </h3>
//   )
}

export default ProductDetails;