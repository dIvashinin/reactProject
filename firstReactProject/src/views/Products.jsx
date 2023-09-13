import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

function Products() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const fetchProducts = async() => {
        const response = await fetch ('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log('data :>> ', data);
        setProducts(data);
        
    }
    
    
    // a bit longer way to fetch
    // const fetchProducts = () => {
    //     fetch ('https://fakestoreapi.com/products')
    //     .then((response)=>{
    //         return response.json()
    //     }).then((data)=>{
    //         console.log('data :>> ', data);
    //         const productsData = data;
    //         console.log('productsData :>> ', productsData);
    //         setProducts(productsData);
    //     }).catch((error)=>{
    //         console.log('error :>> ', error);
    //         setError(true);
    //     });
    // };

   useEffect(() => {
     fetchProducts();
   }, []);
   
   
   return (
    <div>
        <h2>fake store</h2>
            {products.map((product)=>{

                return <ProductCard key={product.id} product={product} />;

            //   <div key={product.id}>
            //     <img src={product.image} alt={product.title} />
            //     {product.price} 
            //     {product.description}</div> 
               
            })}
            
        </div>
   
   );
  
}


export default Products;