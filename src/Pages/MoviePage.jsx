import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleMoviePage from '../components/SingleMoviePage/SingleMoviePage';

//Set Api defult settings
const imdbBasic = {
  baseUrl: `https://imdb-api.com/en/API/`,
  key: `k_nvs3d5mt`,
  // key: `k_2ck3tfdo`
  // key: `k_tjxj5k6p`
  // key: `k_r6q4a65u`,
}

//Set local storage
let movieItems = localStorage.getItem("movieItems");
movieItems = JSON.parse(movieItems);


export default function MoviePage(props) {

  const [Data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const searchMovieInLocal = () => {
        if (movieItems !== null) {
          for (let movie of movieItems) {
            if (movie.id === props.match.params.id) {
              setData(movie);
              return true
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
          let data = await axios.get(`${imdbBasic.baseUrl}/Title/${imdbBasic.key}/${props.match.params.id}`);
          let trailer = await axios.get(`${imdbBasic.baseUrl}/YouTubeTrailer/${imdbBasic.key}/${props.match.params.id}`);
          if (movieItems === null) {
            console.log("initializing movieItems local localStorage for the first time");
            movieItems = [{
              id: data.data.id,
              actorList: data.data.actorList,
              awards: data.data.awards,
              // budget: data.data.boxOffice.budget,
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
              trailer: trailer.data.videoId,
              writers: data.data.writers,
              year: data.data.year,
            }];
            localStorage.setItem("movieItems", JSON.stringify(movieItems));
            setData(movieItems[0]);
          }
          else {
            console.log("Updaiting movieItems localStorage");
            let temp = {
              id: data.data.id,
              actorList: data.data.actorList,
              awards: data.data.awards,
              // budget: data.data.boxOffice.budget,
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
              trailer: trailer.data.videoId,
              writers: data.data.writers,
              year: data.data.year,
            }
            movieItems.push(temp);
            localStorage.setItem("movieItems", JSON.stringify(movieItems));
            setData(temp);
          }
        }
        catch (e) {
          alert(e.message)
        }
      }
      else {
        console.log(`Data was found at local storage`);
        searchMovieInLocal();
      }
    }
    getData();
  }, [props.match.params.id])

  return (
    <>
      <SingleMoviePage
        myData={Data} />
    </>
  )
}