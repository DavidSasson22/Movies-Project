import React from 'react'
import './navbar.css'

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li className="menu"><i className="film icon"></i></li>
          <li className="menu">HOME <i className="home icon"></i></li>
          <li className="menu">SEARCH <i className="search icon"></i></li>
          <li className="menu">FAVORITES <i className="heart icon"></i></li>
          <li className="menu">ANALIZE <i className="chart bar icon"></i></li>
        </ul>
      </nav>
    </div>
  )
}
