import { useState, useEffect } from "react"
import { MovieCard } from "../components/MovieCard"

const filmesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

export const Home = () => {
  const [topFilmes, setTopFilmes] = useState([])

  const getTopRatedFilmes = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopFilmes(data.results);
  };

  useEffect (() => {
    const topRatedURL = `${filmesURL}top_rated?${apiKey}`;

    getTopRatedFilmes(topRatedURL);
  }, [])

  return (
    <div className="container">
      <h2 className="title">Melhores filmes:</h2>
      <div className="movies-container">
        {topFilmes.length === 0 && <p>Carregando...</p>}
        {topFilmes.length > 0 && topFilmes.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
      </div>
    </div>
  )
}
