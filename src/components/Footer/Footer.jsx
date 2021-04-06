import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <div>
      <div className="footerNav">
        <ul className="footer">
          <li className="menu">
            <a target="_blank" href="https://www.linkedin.com/in/david-sasson-67229219b/"><i className="linkedin icon"></i></a>
          </li>
          <li><h4>David Sasson</h4></li>
          <li className="menu">
            <a target="_blank" href="https://github.com/DavidSasson22" ><i className="github icon"></i></a>
          </li>
        </ul>
      </div>
    </div>
  )
}
