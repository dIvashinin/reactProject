import { createContext, useContext } from "react";
// 1 - Create the context
export const ProductsContext = createContext ();

// 2 - Define what's in side of our store
export const ProductsContextProvider = (props) => {
    return (
            <ProductsContext.Provider value={{}}>
                {props.children}
            </ProductsContext.Provider>
    );
};