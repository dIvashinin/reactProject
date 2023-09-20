import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";

import "./App.css";
import About from "./views/About";
import Home from "./views/Home";
import Students from "./components/Students";
import Characters from "./views/Characters";
import Products from "./views/Products";
import MyNavbar from "./components/MyNavbar";
import ErrorPage from "./views/ErrorPage";

import ProductDetails from "./components/ProductDetails";
import Footer from "./components/Footer";
import { ProductsContextProvider } from "./context/ProductsContext";
import ProtectedRoute from "./components/ProtectedRoute";



function App() {
// we create a variable to make router work
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>} errorElement={<ErrorPage/>}>
      <Route index element={<Home/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="products/:productId" element={<ProductDetails/>}/>
      <Route path="about" element={
      <ProtectedRoute>
      <About/>
      </ProtectedRoute>}/>
       {/* <Route path="*" element={<ErrorPage/>}/> */}

    </Route>
  )
);


  // JS code here

  //.....

  return (
    <div>
      <ProductsContextProvider>
      {/* <h1>Hello React World</h1> */}
      {/* <Home /> */}
      {/* <About/> */}
      {/* <Students /> */}
      {/* <Characters/> */}
      {/* <Products/> */}
      
      <RouterProvider router={router}/>
      {/* <Outlet/> */}

      {/* <h2>JSX part</h2> */}
      </ProductsContextProvider>
    </div>
  );
}

const Root = () => {
  return(
    <>
    {/* this text is going to be visible on every page = good place for navbar */}
    {/* <h1>fake is fake</h1> */}
    <MyNavbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default App;

