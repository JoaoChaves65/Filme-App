import { useState, useEffect } from "react"

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
    <div>
      {topFilmes && topFilmes.map((movie) => <p>{movie.title}</p>)}
    </div>
  )
}
