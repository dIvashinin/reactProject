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



function App() {
// we create a variable to make router work
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>} errorElement={<ErrorPage/>}>
      <Route index element={<Home/>}/>
      <Route path="products" element={<Products/>}/>
      <Route path="about" element={<About/>}/>
      {/* <Route path="*" element={<ErrorPage/>}/> */}

    </Route>
  )
);


  // JS code here

  //.....

  return (
    <div>
      {/* <h1>Hello React World</h1> */}
      {/* <Home /> */}
      {/* <About/> */}
      {/* <Students /> */}
      {/* <Characters/> */}
      {/* <Products/> */}
      
      <RouterProvider router={router}/>
      <Outlet/>

      {/* <h2>JSX part</h2> */}
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
    </>
  )
}

export default App;

