import React from 'react'
import axios from 'axios';


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


export default function Movies() {

  const getData = async () => {
    const data = await axios.get(`${imdbApi.baseUrl}/${imdbApi.generalSearch}/${imdbApi.key}/lion`);
    console.log(data);
    const specific = await axios.get(`${imdbApi.baseUrl}/${imdbApi.titeleinfo}/${imdbApi.key}/${data.data.results[0].id}`);
    console.log(specific);
  }
  return (
    <div>
      <input type="button" value="Click" onClick={()=>getData()}/>
    </div>
  )
}
