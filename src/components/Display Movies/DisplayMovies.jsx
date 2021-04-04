import React from 'react'
import { Link } from 'react-router-dom'
import MovieItem from '../Movie/MovieItem';


export default function Movies({ movies }) {

  const renderMovies = () => {
    if (movies.length > 0) {
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
        <div className="errorMessage">
          <h3>OOPS! Your search did not return any results</h3>
        </div>)
    }
  }
  return (
    <>
      {renderMovies()}
    </>
  )
}
