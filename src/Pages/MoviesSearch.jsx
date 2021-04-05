import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Movies from '../components/Display Movies/DisplayMovies';
import SearchBar from '../components/SearchBar/SearchBar';



//Set Api defult settings
const imdbBasic = {
  baseUrl: `https://imdb-api.com/en/API/`,
  key: `k_nvs3d5mt`,
  // key: `k_2ck3tfdo`
  // key: `k_tjxj5k6p`,
  // key: `k_r6q4a65u`,
}

//Set search categoris for the api ([0]) and for the search bar options ([1])
const searchCategories = {
  KeyWord: [`Search`, `Sarch by KeyWord`],
  title: [`SearchTitle`, `Search by title`],
  movie: [`SearchMovie`, `Search movies`],
  series: [`SearchSeries`, `Search series TVs`],
  name: [`SearchName`, `Search by name (cast)`],
}

//Set search category for specific movie
// const searchMovieInfo = `Title`;


//Set local storage
let searchResults = localStorage.getItem("searchResults");
searchResults = JSON.parse(searchResults);

// let myFAvorites = localStorage.getItem("myFAvorites");
// myFAvorites = JSON.parse(myFAvorites);


//Main function
export default function MoviesSearchPage() {

  const [category, setCategory] = useState(`SearchMovie`);
  const [searchTerm, setSearchTerm] = useState(`batman`);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //This fnction can check if user search is already exists in localStorage
    const searchSearchTermInlocal = () => {
      if (searchResults !== null) {
        for (let item of searchResults) {
          if (item.searchTerm === searchTerm && item.category === category) {
            return item.value
          }
        }
        return false
      }
      return false
    }
    const getData = async () => {
      //If user data does not exist in local, pull data frm IMDB API
      if (!searchSearchTermInlocal()) {
        console.log(`could not find ${searchTerm} in ${category} in local localStorage`);
        try {
          const data = await (await axios.get(`${imdbBasic.baseUrl}/${category}/${imdbBasic.key}/${searchTerm}`)).data.results;
          setMovies(data);
          //If there is no local storage, create it
          if (searchResults === null) {
            console.log("initializing local localStorage for the first time");
            searchResults = [{
              searchTerm: searchTerm,
              category: category,
              value: data,
            }]
            localStorage.setItem("searchResults", JSON.stringify(searchResults));
          }
          //If local torage exist, update it
          else {
            console.log(`updating local storage`);
            searchResults.push({
              searchTerm: searchTerm,
              category: category,
              value: data,
            });
            localStorage.setItem("searchResults", JSON.stringify(searchResults));
          }
        }
        catch (e) {
          console.log(e);
          alert(`Error:${e.message} \n you may reached your 100 dayli calls to the server. If so, try agin in 24h`);
        }
      }
      //If result found in local storage, set movie value by it
      else {
        console.log(`Search term has found in local storage`);
        setMovies(searchSearchTermInlocal());
      }
    }
    getData()
  }, [searchTerm, category])


  return (
    <div className="MoviesSearchPage">
      <SearchBar
        searchCategories={searchCategories}
        changeCategory={setCategory}
        changeSearchTerm={setSearchTerm}
      />
      <Movies
        movies={movies}
      />
    </div>
  )
}