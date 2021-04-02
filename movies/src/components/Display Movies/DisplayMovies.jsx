import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';



export default function Movies() {
  return (
    <section className='movies'>
     
    </section>
  )
}


// {movies.map((movie) => {
//   const { imdbID: id, Poster: poster, Title: title, Year: year } = movie

//   return (
//     <Link to={`/movies/${id}`} key={id} className='movie'>
//       <article>
//         <img src={poster === 'N/A' ? url : poster} alt={title} />
//         <div className='movie-info'>
//           <h4 className='title'>{title}</h4>
//           <p>{year}</p>
//         </div>
//       </article>
//     </Link>
//   )
// })}