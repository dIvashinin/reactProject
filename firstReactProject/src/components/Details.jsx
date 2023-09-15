import React from 'react'
import {useParams} from "react-router-dom";

function Details() {
const {productName} = useParams();
const handleButtonClick = () => {
    fetch('https://fakestoreapi.com/products/{data.id}')
};

  return (
    <h3>See more info about {productName} </h3>
  )
};

export default Details;