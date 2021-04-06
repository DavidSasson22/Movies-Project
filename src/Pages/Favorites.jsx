import React from 'react'
import Movies from '../components/Display Movies/DisplayMovies';


export default function Favorites() {
  let movieItems = localStorage.getItem("movieItems");
  movieItems = JSON.parse(movieItems);
  const movies = [];

  movieItems.forEach(movie => movie.like && movies.push(movie))

  console.log(movies);
  return (
    <div>
      <br />
      <br />
      <Movies
        movies={movies}
      />
    </div>
  )
}
