import React from 'react'

function SearchBar(props) {
    const {product} = props;
  return (
        <input type="text" onChange={inputChangeHandler}/>
  )
}

export default SearchBar