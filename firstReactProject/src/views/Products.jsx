import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';

function Products() {

    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    const [inputText, setInputText] = useState("")

    // i'm using a shorter way to fetch: async/ await
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

    const inputChangeHandler = (event) => {
        console.log('event.target.value :>> ', event.target.value);
        const text = event.target.value;
        setInputText(text);

    };

    const filteredProducts = products.filter((product) => {
        // not the best practice to do toLowerCase inline, better to make separate variables
        return product.title.toLowerCase().includes(inputText.toLowerCase());
        
    });
console.log('filteredProducts :>> ', filteredProducts);

   useEffect(() => {
     fetchProducts();
   }, []);
   
   return (
    <div>
        <h2>fake store</h2>
    <div>
        {/* <input type="text" onChange={inputChangeHandler}/> */}
    </div>
            <SearchBar/>
{/* in order to make filter work we need to loop over filtered array */}
            {filteredProducts.map((product)=>{

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