import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SingleMoviePage({ myData }) {
  console.log(myData);

  const [awardsDisplay, setAwardsDisplay] = useState(0);
  const [companiesDisplay, setCompaniesDisplay] = useState(0);

  const renderTextDisplay = (text, state) => {
    if (text !== undefined) {
      console.log(text.slice(0, 20));
      console.log(state);
      return state === 0 ? text.slice(0, 20) : text
    }
  }

  const renderButtonDisplay = (state) => {
    return state === 0 ? ` Read more...` : ` Read less`
  }

  const changeDisplay = (state, stateFun) => {
    state === 0 ? stateFun(1) : stateFun(0)
  }

  const renderSimilars = () => {
    if (typeof (myData.similars) === typeof ([])) {
      return (myData.similars.map((movie, i) => <li key={i}><Link to={`/movies/${movie.id}`}><h4>{movie.title}</h4></Link></li>))
    }
  }


  const renderSingle = () => {
    if (myData !== undefined && myData !== [] && myData !== undefined) {
      return (
        <div className="container">
          <div className="titles">
            <h1>{myData.title}</h1>
            <h4>Year: {myData.year}</h4>
            <h4>Raiting: {myData.imDbRating}</h4>
            <h4>Run time: {myData.runtimeStr}</h4>
          </div>
          <div className="mediaData">
            <img src={myData.image} alt={myData.title} className="poster" />
            <iframe src={`https://www.youtube.com/embed/${myData.trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="player"></iframe>
            <div className="data">
              <h4>Awards: {renderTextDisplay(myData.awards, awardsDisplay)}
              <span onClick={()=> changeDisplay(awardsDisplay, setAwardsDisplay)}>{renderButtonDisplay(awardsDisplay)}</span></h4>
              <hr />
              <h4>Companies: {renderTextDisplay(myData.companies, companiesDisplay)}
              <span onClick={()=> changeDisplay(companiesDisplay, setCompaniesDisplay)}>{renderButtonDisplay(companiesDisplay)}</span></h4>
              <hr />
              <h4>Genres: {myData.genres}</h4>
              <hr />
              <h4>Languages: {myData.languages}</h4>
            </div>
            <div className="plot">
              <h4>{myData.plot}</h4>
            </div>
          </div>
          <div className="footer">
            <div className="singlePageBut">
              <div>
                <h4>Liked this movie?</h4>
              </div>
              <button><i className="heart icon"></i></button>
            </div>
            <div className="mayLike">
              <div>
                <h4>You may also like:</h4>
              </div>
              <ul>
                {renderSimilars()}
              </ul>
            </div>
          </div>
        </div>
      )
    }
    else {
      return <h1>Sorry</h1>
    }
  }
  return (
    <>
      {renderSingle()}
    </>
  )
}