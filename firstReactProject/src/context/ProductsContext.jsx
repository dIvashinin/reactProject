import { createContext, useState } from "react";
// 1 - Create the context
export const ProductsContext = createContext ();

// 2 - Define what's inside of our store
export const ProductsContextProvider = (props) => {
    console.log('props :>> ', props);

// 3 - Move here all the states and functions needed
    const [products, setProducts] = useState([]);
    // const [info, setInfo] = useState(); pagination probably
    const fetchProducts = async() => {
        const response = await fetch ('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log('data :>> ', data);
        setProducts(data);   
    };

    return (
            <ProductsContext.Provider value={{products, fetchProducts}}>
                {props.children}
            </ProductsContext.Provider>
    );
};