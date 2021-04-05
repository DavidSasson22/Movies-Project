import React from 'react'
import { Link } from 'react-router-dom'
// import './style.css'

export default function SingleMoviePage({ myData }) {

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
              <h4>Awards: {myData.awards}</h4>
              <hr />
              <h4>Companies: {myData.companies}</h4>
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