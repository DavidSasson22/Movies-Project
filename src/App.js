import { BrowserRouter, Route, } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import Favorites from './Pages/Favorites';
import LandingPage from './Pages/LandingPage';
import MoviePage from './Pages/MoviePage';
import MoviesSearchPage from './Pages/MoviesSearch'
import './style.css'


export default function App() {

  return (
    <div>
      <BrowserRouter>
        <>
          <NavBar />
          <Route path="/" exact component={LandingPage} />
          <Route path="/movies" exact component={MoviesSearchPage} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/movies/:id" exact component={MoviePage} />
          <Footer />
        </>
      </BrowserRouter>
    </div>
  )
}
