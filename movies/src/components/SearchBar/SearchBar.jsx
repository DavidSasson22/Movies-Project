import React from 'react'

export default function SearchBar() {
  return (
    <form className='search-form' onSubmit={(e) => e.preventDefault()}>
      <h2>search</h2>
      <input
        type='text '
        className='form-input'/>
        <select name="categories" id="categories" className="categories">
          <option value="a">By key word</option>
          <option value="b">b</option>
          <option value="c">c</option>
        </select>
    </form>
  )
}
