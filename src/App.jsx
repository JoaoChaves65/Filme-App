import { Link, Outlet } from 'react-router-dom'
import './App.css'

export default function App() {
  return (
    <div>
      <nav className="navbar">
        <h2>
          <Link to="/">Dados Filmes</Link>
        </h2>
        <Link to="/movie/1">Movie</Link>
        <Link to="/search">Search</Link>
      </nav>
      <h2>Data Movies</h2>
      <Outlet/>
    </div>
  )
}

