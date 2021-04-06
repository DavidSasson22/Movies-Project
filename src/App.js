import { BrowserRouter, Route, } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Favorites from './Pages/Favorites';
import MoviePage from './Pages/MoviePage';
import MoviesSearchPage from './Pages/MoviesSearch'
import './style.css'


export default function App() {

  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
          <Route path="/movies" exact component={MoviesSearchPage} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/movies/:id" exact component={MoviePage} />
          <div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}
