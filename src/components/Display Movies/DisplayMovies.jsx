import React from 'react'
import { Link } from 'react-router-dom'
import MovieItem from '../Movie/MovieItem';


export default function Movies({ movies, category }) {

  const renderMovies = () => {
    if (movies.length > 0) {
      if (category !== `SearchName`) {
        return (
          <div className='movies'>
            {movies.map((movie) => {
              return (
                <Link to={`/movies/${movie.id}`} key={movie.id} className='movie'>
                  <MovieItem
                    movie={movie} />
                </Link>
              )
            })}
          </div>
        )
      }
      else {
        return (
          <div className='movies'>
            {movies.map((movie) => {
              return (
                <div key={movie.id} className='movie'>
                  <MovieItem
                    movie={movie} />
                </div>
              )
            })}
          </div>
        )
      }
    }
    else {
      return (
        <div className="errorMessage">
          <h3>OOPS! Nothing here</h3>
        </div>)
    }
  }
  return (
    <>
      {renderMovies()}
    </>
  )
}
