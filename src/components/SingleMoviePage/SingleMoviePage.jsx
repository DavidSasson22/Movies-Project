import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function SingleMoviePage({ myData }) {

  const [awardsDisplay, setAwardsDisplay] = useState(0);
  const [companiesDisplay, setCompaniesDisplay] = useState(0);
  const [genresDisplay, setGenresDisplay] = useState(0);
  const [languagesDisplay, setLanguagesDisplay] = useState(0);
  const [starsDisplay, setStarsDisplay] = useState(0);
  const [writersDisplay, setWritersDisplay] = useState(0);
  const [directorsDisplay, setDirectorsDisplay] = useState(0);
  const [like, setLike] = useState(myData.like)


  const renderTextDisplay = (text, state) => {
    if (text !== undefined) {
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

  const changeMyLikes = () => {
    let movieItems = localStorage.getItem("movieItems");
    movieItems = JSON.parse(movieItems);
    for (let movie of movieItems) {
      if (movie.id === myData.id) {
        movie.like = !movie.like;
        setLike(!like);
        setLike(movie.like)
        localStorage.setItem("movieItems", JSON.stringify(movieItems));
        return
      }
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
              <h4>Directors: {renderTextDisplay(myData.tdirectors, directorsDisplay)}
                <span onClick={() => changeDisplay(directorsDisplay, setDirectorsDisplay)}>{renderButtonDisplay(directorsDisplay)}</span></h4>
              <hr />
              <h4>Awards: {renderTextDisplay(myData.awards, awardsDisplay)}
                <span onClick={() => changeDisplay(awardsDisplay, setAwardsDisplay)}>{renderButtonDisplay(awardsDisplay)}</span></h4>
              <hr />
              <h4>Companies: {renderTextDisplay(myData.companies, companiesDisplay)}
                <span onClick={() => changeDisplay(companiesDisplay, setCompaniesDisplay)}>{renderButtonDisplay(companiesDisplay)}</span></h4>
              <hr />
              <h4>Genres: {renderTextDisplay(myData.genres, genresDisplay)}
                <span onClick={() => changeDisplay(genresDisplay, setGenresDisplay)}>{renderButtonDisplay(genresDisplay)}</span></h4>
              <hr />
              <h4>Languages: {renderTextDisplay(myData.languages, languagesDisplay)}
                <span onClick={() => changeDisplay(languagesDisplay, setLanguagesDisplay)}>{renderButtonDisplay(languagesDisplay)}</span></h4>
              <hr />
              <h4>Stars: {renderTextDisplay(myData.stars, starsDisplay)}
                <span onClick={() => changeDisplay(starsDisplay, setStarsDisplay)}>{renderButtonDisplay(starsDisplay)}</span></h4>
              <hr />
              <h4>Writers: {renderTextDisplay(myData.writers, writersDisplay)}
                <span onClick={() => changeDisplay(writersDisplay, setWritersDisplay)}>{renderButtonDisplay(writersDisplay)}</span></h4>
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
              <button onClick={() => changeMyLikes()}><i className={like ? `heart icon red` : `heart icon white`}></i></button>
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