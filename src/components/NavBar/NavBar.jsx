import React from 'react'
import './navbar.css'

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li className="menu"><i className="film icon"></i></li>
          <li className="menu"><span>HOME </span><i className="home icon"></i></li>
          <li className="menu"><span>SEARCH </span><i className="search icon"></i></li>
          <li className="menu"><span>FAVORITES </span><i className="heart icon"></i></li>
          <li className="menu"><span>ANALIZE </span><i className="chart bar icon"></i></li>
        </ul>
      </nav>
    </div>
  )
}
