import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import './TopRated.css'

export default function TopRated() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1")
      .then(response => response.json())
      .then(data => setMovies(data.results))
  }, [])

  return (
    <>
      <Navbar />
      <div className="topRatedMoviesContainer">
        {movies.map(movie =>
          <div className="topRatedMovieCard" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="topRatedMoviePoster" />
            <h2 className="topRatedMovieTitle">{movie.title}</h2>
            <h4 className="topRatedMovieRating">{movie.vote_average}</h4>
          </div>
        )}
      </div>
    </>
  )
}
