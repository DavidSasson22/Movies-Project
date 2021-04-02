import { BrowserRouter, Route, Link } from 'react-router-dom';
import MoviesSearchPage from './Pages/MoviesSearch'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
        <Route path="/" exact component={MoviesSearchPage} />
        </div>
      </BrowserRouter>
    </div>
  )
}
