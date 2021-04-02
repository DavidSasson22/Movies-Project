import React from 'react'
import axios from 'axios';
import Movies from '../components/Display Movies/DisplayMovies';
import SearchBar from '../components/SearchBar/SearchBar';
import './style.css'


const imdbApi = {
  baseUrl: `https://imdb-api.com/en/API/`,
  key: `k_nvs3d5mt`,
  generalSearch: `Search`,
  title: `SearchTitle`,
  movie: `SearchMovie`,
  series: `SearchSeries`,
  name: `SearchName`,
  titeleinfo: `Title`,  
}


export default function MoviesSearchPage() {

  const getData = async () => {
    const data = await axios.get(`${imdbApi.baseUrl}/${imdbApi.generalSearch}/${imdbApi.key}/lion`);
    console.log(data);
    const specific = await axios.get(`${imdbApi.baseUrl}/${imdbApi.titeleinfo}/${imdbApi.key}/${data.data.results[0].id}`);
    console.log(specific);
  }
  return (
    <div className="MoviesSearchPage">
      <SearchBar/>
      <Movies/>
    </div>
  )
}
