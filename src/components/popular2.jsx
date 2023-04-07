import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Popular.css';

export default function Popular() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=1')
      .then(response => response.json())
      .then(data => setMovies(data.result))
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <Navbar />
      <div className="popularContainer">
        {movies.map(movie => (
          <div className="card" key={movie.id}>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <h2>{movie.title}</h2>
            <h4>Rating: {movie.vote_average}</h4>
          </div>
        ))}
      </div>
    </>
  )
}
