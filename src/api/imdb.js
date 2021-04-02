import axios from 'axios';


export default axios.create({
  baseURL: `https://imdb-api.com/en/API/`,
  headers: {
    Authorization: `k_nvs3d5mt`
  }
}) 
