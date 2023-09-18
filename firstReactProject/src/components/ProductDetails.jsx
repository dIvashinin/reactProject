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
    <div className="">
      <h1>Details</h1>
      <h2>{product.category}</h2>
      <h2>{product.title}</h2>
      <img src={product.image} alt="" style={{ width: "490px", height: "490px" }}/>
      <h4>{product.description}</h4>
      <h5>{product.price.toFixed(2)} €</h5>
      <Link className='back' to={'/products'}>back to products</Link> 
      <Link className='next' to={`/products/${product.id+1}`}> next item</Link>
      

      {/* <button onClick={onCloseClick}>Close</button> */}
      </div>
  );
  

    // fetch('https://fakestoreapi.com/products/{data.id}')
// };

//   return (
    // <h3>See more info about {productName} </h3>
//   )
}

export default ProductDetails;