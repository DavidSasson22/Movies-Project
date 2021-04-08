import React, { useState } from 'react'
import Canvas from './Canvas';
import './style.css'

export default function CanvasPage() {

  //Set DataBase for analization
  let movieItems = localStorage.getItem("movieItems");
  movieItems = JSON.parse(movieItems);

  const movies = movieItems.filter(movie => movie.like);

  const myDataBase = {
    genre: {},
    decade: {},
    actors: {},
    tdirectors: {},
  };

  movies.forEach(movie => {
    movie.genreList.forEach(genre => {
      genre.key in myDataBase.genre ? myDataBase.genre[genre.key] += 1 : myDataBase.genre[genre.key] = 1;
    })
    let decade = movie.releaseDate.slice(0, 3) + `0`;
    decade in myDataBase.decade ? myDataBase.decade[decade] += 1 : myDataBase.decade[decade] = 1;
    movie.actorList.forEach(actor => {
      actor.name in myDataBase.actors ? myDataBase.actors[actor.name] += 1 : myDataBase.actors[actor.name] = 1;
    })
    movie.tdirectors in myDataBase.tdirectors ? myDataBase.tdirectors[movie.tdirectors] += 1 : myDataBase.tdirectors[movie.tdirectors] = 1;
  })

  
  const getTop = (object) => {
    const keys = Object.keys(object);
    keys.sort((a, b)=>  object[b] - object[a]);
    let temp = keys.length < 10 ? keys.slice(0,keys.length) :  keys.slice(0, 10);
    let result = {};
    temp.forEach(key => result[key] = object[key]);
    return result
  }

  
  const actors = myDataBase.actors;
  const decade = myDataBase.decade;
  const genre = myDataBase.genre;
  const tdirectors = myDataBase.tdirectors;

  const [sendDataToAnalyze, setSendDataToAnalyze] = useState(getTop(actors));




  return (
    <div className="myGraphContainer">
      <Canvas
        myDataBase={sendDataToAnalyze} />
      <div className="analizeButtons">
        <input type="button" value="Genre"
          onClick={() => setSendDataToAnalyze(getTop(genre))}
        />
        <input type="button" value="Decade"
          onClick={() => setSendDataToAnalyze(getTop(decade))}
        />
        <input type="button" value="Director"
          onClick={() => setSendDataToAnalyze(getTop(tdirectors))}
        />
        <input type="button" value="Actors"
          onClick={() => setSendDataToAnalyze(getTop(actors))}
        />
      </div>
    </div>
  )
}
