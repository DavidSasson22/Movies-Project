import React from 'react'

export default function MovieItem({movie}) {

  return (
    <article>
      <img src={movie.image} alt={movie.title} />
      <div className='movie-info'>
        <h4 className='title'>{movie.title}</h4>
        <p>{movie.description}</p>
      </div>
    </article>
  )
}
