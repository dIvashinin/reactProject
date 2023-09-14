// not functioning
import React from 'react'

function SearchBar(props) {
    const {products, } = props;
  return (
        <input type="text" placeholder='search' onChange={inputChangeHandler}/>
  )
}

export default SearchBar