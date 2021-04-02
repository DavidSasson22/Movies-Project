import React, { useState, useEffect } from 'react'
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
  const [movies, setMovies] = useState([]);

  // const getData = async () => {
  //   const data = await axios.get(`${imdbBasic.baseUrl}/${category}/${imdbBasic.key}/${searchTerm}`);
  // }

  useEffect(() => {
    console.log(`father activated, term = ${searchTerm}`);
    const getData = async () => {
      const data = await (await axios.get(`${imdbBasic.baseUrl}/${category}/${imdbBasic.key}/${searchTerm}`)).data.results;
      setMovies(data);
    }
    getData()
  }, [searchTerm])


  useEffect(() => {
    console.log(`father activated, category = ${category}`);
    const getData = async () => {
      const data = await (await axios.get(`${imdbBasic.baseUrl}/${category}/${imdbBasic.key}/${searchTerm}`)).data.results;
      setMovies(data);
    }
    getData()
  }, [category])

  return (
    <div className="MoviesSearchPage">
      <SearchBar
        searchCategories={searchCategories}
        changeCategory={setCategory}
        changeSearchTerm={setSearchTerm}
      />
      <Movies
      movies = {movies}
      />
    </div>
  )
}


