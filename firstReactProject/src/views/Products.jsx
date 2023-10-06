import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
// import SearchBar from "../components/SearchBar";
import { ProductsContext } from "../context/ProductsContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

function Products() {
  // Subscribe component to the context
  const { products, fetchProducts } = useContext(ProductsContext);

  // const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const [inputText, setInputText] = useState("");

  // i'm using a shorter way to fetch: async/ await
  // fetch goes now to ProductsContext
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
    console.log("event.target.value :>> ", event.target.value);
    const text = event.target.value;
    setInputText(text);
  };

  const filteredProducts = products.filter((product) => {
    // not the best practice to do toLowerCase inline, better to make separate variables
    return product.title.toLowerCase().includes(inputText.toLowerCase());
  });
  console.log("filteredProducts :>> ", filteredProducts);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="sticky-header">
      <h1 className="fake-store">FAKE.STORE</h1>

      <div className="searchbar">
        <input
            id="mySearchInput"
          className="search-input"
          type="text"
          placeholder="search me..."
          onChange={inputChangeHandler}
        />
      </div>
      <Container fluid>
        <Row>
          {/* <SearchBar/> */}
          {/* in order to make filter work we need to loop over filtered array */}
          {filteredProducts.map((product) => {
            return <ProductCard key={product.id} product={product} />;

            //   <div key={product.id}>
            //     <img src={product.image} alt={product.title} />
            //     {product.price}
            //     {product.description}</div>
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Products;
