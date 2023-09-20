import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ProductsContext } from "../context/ProductsContext";

function Home() {
  // subscribe Home to the context
const {products} = useContext(ProductsContext);

// Define the findMinMaxPrices function
function findMinMaxPrices(products) {
  if (products.length === 0) {
    return { minPrice: 0, maxPrice: 0 };
  }

  let minPrice = products[0].price;
  let maxPrice = products[0].price;

  for (const product of products) {
    const price = product.price;
    if (price < minPrice) {
      minPrice = price;
    }
    if (price > maxPrice) {
      maxPrice = price;
    }
  }

  return { minPrice, maxPrice };
}

// Call the function to get min and max prices
const { minPrice, maxPrice } = findMinMaxPrices(products);



  return (
    <div className="home">
      <h1>FAKE.STORE home</h1>

      <Navbar />

      <section>this is a home page of FAKE.STORE</section>
      <section>we have 
        <span style={{color:"red"}}> {products.length}</span> selected fake products with a price range of <span style={{color:"red"}}>{minPrice} EUR - {maxPrice} EUR</span> and a lot more for your taste</section>
      <img className="fake" src="/pics/fake.jpeg" alt="" />
      {/* <Footer /> */}

    </div>
  );
}

export default Home;
