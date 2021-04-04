import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function SingleMoviePage({ myData }) {
  console.log(`son printing mydata`);
  console.log(myData);
  console.log(myData.trailer);


  const renderSingle = () => {
    if (myData !== undefined) {
      return (
        <div className="single-movie-container">
          <div className = "titles">
          <h2>{myData.title}</h2>
          <h4>Year: {myData.year}</h4>
          <h4>Raiting: {myData.imDbRating}</h4>
          <h4>Run time: {myData.runtimeStr}</h4>
          </div>
          <div className='single-movie'>
            <div className="pic-and-vid">
              <img src={myData.image} alt={myData.title} />
              <div className="watchTraler">
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${myData.trailer}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>
            <div className="single-movie-info">
              <p>{myData.plot}</p>
              <h4>Awards: {myData.awards}</h4>
              <h4>Companies: {myData.companies}</h4>
              <h4>Genres: {myData.genres}</h4>
              <h4>Languages: {myData.languages}</h4>
              <br />

              <Link to="/movies" className="btn">
                Back to search
              </Link>
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