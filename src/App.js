import { BrowserRouter, Route,  } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import MoviesSearchPage from './Pages/MoviesSearch'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
        <NavBar/>
        <Route path="/" exact component={MoviesSearchPage} />
        </div>
      </BrowserRouter>
    </div>
  )
}
