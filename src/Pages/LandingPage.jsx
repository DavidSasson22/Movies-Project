import React from 'react'

export default function LandingPage() {
  return (
    <>
      <div className="landingPage">
        <div className="headerL">
          <h1>Welcom to David's Movie App!</h1>
        </div>
        <div className="menuL">
          <div className="howItWorks">
            <h3>How does it work?</h3>
            <p>
              This website is designed to help you choose your next favorite movie or TV series.
            </p>
            <p>
              Search for your favorite movies or TV series, and mark them as "liked". You will be able to view your choices at the "Favorite" section. The website will analyze different criterias of your choices. You will be able to see what is your favorite gener, decate, actor and more.
            </p>
            <p>
              With this information, looking for the next binge will be a piece of cake!
            </p>
          </div>
        </div>
        <div className="tv">
          <div className="tvHeader">
            <h3>T.V. Series</h3>
          </div>
          <div className="tvDexter tvImage"></div>
          <div className="tvfrinds tvImage"></div>
          <div className="tvGameOfThrones tvImage"></div>
          {/* <div className="howIMet tvImage"></div> */}
        </div>
        <div className="actorsL">
          <div className="actorsHeader"><h3>Actors</h3></div>
          <div className="eastwood tvImage"></div>
          {/* <div className="monroe tvImage"></div> */}
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
    </>
  )
}
