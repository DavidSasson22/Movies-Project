import React from 'react'

export default function LandingPage() {
  return (
    <div>
      <div className="landingPage">
        <div className="headerL">
          <h1>Welcom to David's Movie App!</h1>
        </div>
        <div className="menuL">
          <div className="howItWorks">
            <h3>How does it work?</h3>
          </div>
          
        </div>
        <div className="tv">
          <div className="tvHeader"><h3>T.V. Series</h3></div>
          <div className="tvDexter tvImage"></div>
          <div className="tvfrinds tvImage"></div>
          <div className="tvGameOfThrones tvImage"></div>
          <div className="howIMet tvImage"></div>
        </div>
        <div className="actorsL">
          <div className="actorsHeader"><h3>Actors</h3></div>
          <div className="eastwood tvImage"></div>
          <div className="monroe tvImage"></div>
        </div>
        <div className="moviesL">
          <div className="movieHeader"><h3>Movies</h3></div>
          <div className="movieJoker tvImage"></div>
          <div className="movieGurdians tvImage"></div>
          <div className="movieIsntItRomantic tvImage"></div>
          <div className="movieCatchMe tvImage"></div>
          <div className="movieMemento tvImage"></div>
          <div className="movieBackToThe tvImage"></div>
        </div>
      </div>
    </div>
  )
}
