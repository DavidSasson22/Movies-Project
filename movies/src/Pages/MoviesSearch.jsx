import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Movies from '../components/Display Movies/DisplayMovies';
import SearchBar from '../components/SearchBar/SearchBar';
import './style.css'


//Set Api defult settings
const imdbBasic = {
  baseUrl: `https://imdb-api.com/en/API/`,
  key: `k_nvs3d5mt`,
}

//Set search categoris for the api[0] and for the search bar options[1]
const searchCategories = {
  KeyWord: [`Search`, `Sarch by KeyWord`],
  title: [`SearchTitle`, `Search by title`],
  movie: [`SearchMovie`, `Search movies`],
  series: [`SearchSeries`, `Search series TVs`],
  name: [`SearchName`, `Search by name (cast)`],
}

//Set search category for specific movie
const searchMovieInfo = `Title`;


export default function MoviesSearchPage() {

  const [category, setCategory] = useState(`SearchMovie`);
  const [searchTerm, setSearchTerm] = useState(`batman`);

  // const getData = async () => {
  //   const data = await axios.get(`${imdbApi.baseUrl}/${imdbApi.generalSearch}/${imdbApi.key}/lion`);
  //   console.log(data);
  //   const specific = await axios.get(`${imdbApi.baseUrl}/${imdbApi.titeleinfo}/${imdbApi.key}/${data.data.results[0].id}`);
  //   console.log(specific);
  // }

  return (
    <div className="MoviesSearchPage">
      <SearchBar
      searchCategories = {searchCategories}
      changeCategory = {setCategory}
      changeSearchTerm = {setSearchTerm}
      />
      <Movies/>
    </div>
  )
}
