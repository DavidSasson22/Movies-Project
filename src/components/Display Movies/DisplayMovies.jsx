import React from 'react'
import { Link } from 'react-router-dom'


export default function Movies({ movies }) {

  return (
    <section className='movies'>
      {movies.map((movie) => {
        return (
          <Link to={`/movies/${movie.id}`} key={movie.id} className='movie'>
            <article>
              <img src={movie.image} alt={movie.title} />
              <div className='movie-info'>
                <h4 className='title'>{movie.title}</h4>
                <p>{movie.description}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}
