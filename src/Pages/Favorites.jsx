import React from 'react'
import Movies from '../components/Display Movies/DisplayMovies';


export default function Favorites() {
  let movieItems = localStorage.getItem("movieItems");
  movieItems = JSON.parse(movieItems);
  const movies = [];

  movieItems.forEach(movie => movie.like && movies.push(movie))

  console.log(movies);
  return (
    <div className="Favorites">
      <br />
      <br />
      <div className="myFavorites">
      <h2>My favorites</h2>
      </div>
      <Movies
        movies={movies}
      />
    </div>
  )
}
