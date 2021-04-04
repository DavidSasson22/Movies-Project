import React, { useEffect } from 'react'
import axios from 'axios'
import SingleMoviePage from '../components/SingleMoviePage/SingleMoviePage';

//Set Api defult settings
const imdbBasic = {
  baseUrl: `https://imdb-api.com/en/API/`,
  // key: `k_nvs3d5mt`,
  key: `k_2ck3tfdo`
}

//Set local storage
let movieItems = localStorage.getItem("movieItems");
movieItems = JSON.parse(movieItems);

let data;

export default function MoviePage(props) {

  useEffect(() => {
    const getData = async () => {
      const searchMovieInLocal = () => {
        if (movieItems !== null) {
          for (let movie of movieItems) {
            if (movie.id === props.match.params.id) {
              return movie
            }
          }
          return false
        }
        else {
          return false
        }
      }

      if (!searchMovieInLocal()) {
        try {
          data = await axios.get(`${imdbBasic.baseUrl}/Title/${imdbBasic.key}/${props.match.params.id}`);
          let trailer = await axios.get(`${imdbBasic.baseUrl}/YouTubeTrailer/${imdbBasic.key}/${props.match.params.id}`);
          if (movieItems === null) {
            console.log("initializing local localStorage for the first time");
            movieItems = [{
              id: data.data.id,
              actorList: data.data.actorList,
              awards: data.data.awards,
              budget: data.data.boxOffice.budget,
              companies: data.data.companies,
              tdirectors: data.data.directors,
              fullTitle: data.data.fullTitle,
              genreList: data.data.genreList,
              genres: data.data.genres,
              imDbRating: data.data.imDbRating,
              image: data.data.image,
              languages: data.data.languages,
              plot: data.data.plot,
              releaseDate: data.data.releaseDate,
              runtimeStr: data.data.runtimeStr,
              similars: data.data.similars,
              starList: data.data.starList,
              stars: data.data.stars,
              title: data.data.title,
              trailer: trailer.data.videoUrl,
              writers: data.data.writers,
              year: data.data.year,
            }];
            localStorage.setItem("movieItems", JSON.stringify(movieItems));
          }
          else {
            console.log("Updaiting local localStorage");
            movieItems.push({
              id: data.data.id,
              actorList: data.data.actorList,
              awards: data.data.awards,
              budget: data.data.boxOffice.budget,
              companies: data.data.companies,
              tdirectors: data.data.directors,
              fullTitle: data.data.fullTitle,
              genreList: data.data.genreList,
              genres: data.data.genres,
              imDbRating: data.data.imDbRating,
              image: data.data.image,
              languages: data.data.languages,
              plot: data.data.plot,
              releaseDate: data.data.releaseDate,
              runtimeStr: data.data.runtimeStr,
              similars: data.data.similars,
              starList: data.data.starList,
              stars: data.data.stars,
              title: data.data.title,
              trailer: data.data.trailer,
              writers: data.data.writers,
              year: data.data.year,
            });
            localStorage.setItem("movieItems", JSON.stringify(movieItems));
          }
        }
        catch (e) {
          alert(e.message)
        }
      }
      else {
        console.log(`Data was found at local storage`);
        data = searchMovieInLocal();
      }
    }
    getData()
  }, [props])

  return (
    <div>
      <br />
      <h1>This is Movie Page</h1>
      <SingleMoviePage
        data={data} />
    </div>
  )
}

