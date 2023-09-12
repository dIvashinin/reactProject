import React, { useEffect, useState } from 'react';

function Products() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const fetchProducts = () => {
        fetch ('https://fakestoreapi.com/products')
        .then((response)=>{
            return response.json()
        }).then((data)=>{
            console.log('data :>> ', data);
            const productsData = data;
            console.log('productsData :>> ', productsData);
            setProducts(productsData);
        }).catch((error)=>{
            console.log('error :>> ', error);
            setError(true);
        });
    };

   useEffect(() => {
     fetchProducts();
   }, []);
   
   
   return (
    <div>
        <h2>fake store</h2>
        <div>
            <ul>
            {products.map((product)=>(
              <div key={product.id}>
                <img src={product.image} alt={product.title} />
                {product.price} {product.description}</div> 
               
            ))}
           </ul> 
        </div>
    </div>
   );
  
}


export default Products;