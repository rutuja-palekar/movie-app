import React, { useState, useEffect } from 'react'
import Navbar from './Navbar';
import Pagination from '@mui/material/Pagination';
import './Popular.css'
import { Link, useNavigate } from 'react-router-dom'

export default function TopRated() {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const navigate = useNavigate();

  const searchMovieHandler = (movieName) => {
    const filteredMovies = movies.filter(m => m.title.toLowerCase().includes(movieName));
    setFilteredMovies(filteredMovies);
  }

  const handleChangePage = (e) => {
    const pageNo = e.target.innerText;
    if (isNaN(pageNo)) {
      return;
    }
    setPage(pageNo)
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US&page=${page}`)
      .then(response => response.json())
      .then(data => {
        setMovies(data.results)
        setFilteredMovies(data.results)
      })
  }, [page])

  return (
    <>
      <Navbar onSearchMovie={searchMovieHandler} />
      <div className="popularMoviesContainer">
        {filteredMovies.map(movie =>
          <Link key={movie.id} to={`/SingleMovieDetail/movie/${movie.id}`}>
            <div className="popularMovieCard" key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="popularMoviePoster" onClick={() => navigate("/SingleMovieDetail")} />
              <h2 className="popularMovieTitle">{movie.title}</h2>
              <h4 className="popularMovieRating">{movie.vote_average}</h4>
            </div>
          </Link>
        )}
      </div>
      <div style={{
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'end'
      }
      }>
        <Pagination
          onClick={handleChangePage}
          count={10} size="large"
        />
      </div>
    </>
  )
}

// 750, 950, 1115