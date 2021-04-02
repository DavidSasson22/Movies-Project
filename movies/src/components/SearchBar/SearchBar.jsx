import React, { useState, useEffect } from 'react'

export default function SearchBar({ searchCategories, changeCategory, changeSearchTerm }) {

  const [searchTerm, SetSearchTerm] = useState(`batman`);
  const [category, setCategory] = useState(`SearchMovie`);


  let options = []

  for (let key in searchCategories) {
    options.push(searchCategories[key][1]);
  }

  const categoryChangedHandler = (e) => {
    setCategory(e);
  }

  const inputChangeHandler = async (e) => {
    SetSearchTerm(e);
  }

  useEffect (()=>{
    console.log(category);
  },[category])

  useEffect (()=>{
    console.log(searchTerm);
  },[searchTerm])


  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>Search</h2>
      <input type='text' className='form-input' defaultValue={searchTerm}
      onChange={(e)=>inputChangeHandler(e.target.value)}/>
      <select name="categories" id="categories" className="categories"
        onChange={(e) => categoryChangedHandler(e.target.value)}>
        {options.map((op, i) => <option key={i} value={op}>{op}</option>)}
      </select>
    </form>
  )
}
