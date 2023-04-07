import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import './SingleMovieDetail.css'

export default function SingleMovieDetail() {
  const { id } = useParams();
  const [loader, setLoader] = useState(true);
  const [movie, setMovie] = useState()

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
        setLoader(false);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Navbar />
      <div className="singleMovieDetailContainer">
        <div className="singleMovieDetailCard">
          {
            loader && <h1>Loading...</h1>
          }
          {
            !loader && <>
              <h3 style={{ color: 'white' }}>{movie.overview}</h3>
              <h5 style={{ color: 'white' }} >{movie.title}</h5>
            </>
          }
        </div>
      </div>
    </>
  )
}
