import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul className="navbar">
          {/* <li className="menu"><i className="film icon"></i></li> */}
          <li className="menu">
            <Link to={`/`} className="menu">
              <span>HOME </span><i className="home icon"></i></Link></li>
          <li className="menu">
            <Link to={`/movies`} className="menu"><span>SEARCH </span><i className="search icon"></i>
            </Link></li>
          <li className="menu">
            <Link to={`/favorites`} className="menu">
              <span>FAVORITES </span><i className="heart icon"></i>
            </Link></li>
          <li className="menu"><span>ANALYZE </span><i className="chart bar icon"></i></li>
        </ul>
      </nav>
    </div>
  )
}
