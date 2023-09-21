import { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { ProductsContext } from "../context/ProductsContext";

function Home() {
  // subscribe Home to the context
const {products, fetchProducts} = useContext(ProductsContext);

// Define the findMinMaxPrices function
const calculateMinMaxPrice = (products) => {
  if (products.length === 0) {
    // If there are no products, return an object with default values
    return { minPrice: 0, maxPrice: 0 };
  }

  // Initialize minPrice and maxPrice with the price of the first product
  let minPrice = products[0].price;
  let maxPrice = products[0].price;

  // Iterate through the products array starting from the second product
  for (let i = 1; i < products.length; i++) {
    const currentPrice = products[i].price;

    // Update minPrice if the current product's price is lower
    if (currentPrice < minPrice) {
      minPrice = currentPrice;
    }

    // Update maxPrice if the current product's price is higher
    if (currentPrice > maxPrice) {
      maxPrice = currentPrice;
    }
  }

  // Return an object containing the calculated minPrice and maxPrice
  return { minPrice, maxPrice };
};


// Call the function to get min and max prices
const { minPrice, maxPrice } = calculateMinMaxPrice(products);



  return (
    <div className="home">
      <h1>FAKE.STORE home</h1>

      <Navbar />

      <section>this is a home page of FAKE.STORE</section>
      <section>we have 
        <span style={{color:"red"}}> {products.length}</span> selected fake products <br /> with a price range of <span style={{color:"red"}}>{minPrice} EUR - {maxPrice} EUR</span> <br /> and a lot more for your taste</section>
        <section>go check yourself</section>
      <img className="fake" src="/pics/fake.jpeg" alt="" />
      {/* <Footer /> */}

    </div>
  );
}

export default Home;
