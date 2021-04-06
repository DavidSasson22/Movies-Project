import React from 'react'

export default function LandingPage() {
  return (
    <div>
      <div className="landingPage">
        <div className="headerL">
          <h1>Welcom to David's Movie App!</h1>
        </div>
        <div className="menuL">Menu</div>
        <div className="tv">
          <div className="tvHeader"><h3>T.V. Series</h3></div>
          <div className="tvDexter tvImage"></div>
          <div className="tvfrinds tvImage"></div>
          <div className="tvGameOfThrones tvImage"></div>
          <div className="howIMet tvImage"></div>
        </div>
        <div className="rightL">Right</div>
        <div className="footerL">Footer</div>
      </div>
    </div>
  )
}
