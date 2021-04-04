import { BrowserRouter, Route,  } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MoviePage from './Pages/MoviePage';
import MoviesSearchPage from './Pages/MoviesSearch'
import './style.css'


export default function App() {
  localStorage.clear();

  return (
    <div>
      <BrowserRouter>
        <div>
        <NavBar/>
        <Route path="/movies" exact component={MoviesSearchPage} />
        <Route path="/movies/:id" exact component= {MoviePage}/>
        </div>
      </BrowserRouter>
    </div>
  )
}
