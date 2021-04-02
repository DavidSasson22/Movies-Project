import React from 'react'

export default function SearchBar({ searchCategories }) {

  let options = []

  for (let key in searchCategories) {
    options.push(searchCategories[key][1]);
  }


  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search</h2>
      <input
        type='text '
        className='form-input' />
      <select name="categories" id="categories" className="categories">
        <option value="a">By key word</option>
        {options.map((op,i) => <option key={i} value={op}>{op}</option>)}
        </select>
    </form>
  )
}
