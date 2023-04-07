import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

export default function Navbar(props) {
  const searchHandler = (e) => {
    // const movieName = searchInput.current.value;
    const movieName = e.target.value;
    props.onSearchMovie(movieName.toLowerCase())
  }

  return (
    <nav className="navbar">
      <div className="leftSideTitle">
        <h1 className="title">MovieDb</h1>
      </div>
      <div className="rightMenusContainer">
        <ul className="menuContainer">
          <li className="menus">
            <Link to="/">Popular</Link>
          </li>
          <li className="menus">
            <Link to="/TopRated">Top Rated</Link>
          </li>
          <li className="menus">
            <Link to="/Upcoming">Upcoming</Link>
          </li>
        </ul>
        <input
          className="searchBox searchContainer"
          type="text"
          // ref={searchInput}
          onChange={searchHandler}
          placeholder="Movie Name" />

        <div className="searchButton">
          <SearchRoundedIcon className="searchIcon"
            style={{
              fontSize: "2rem",
              backgroundColor: "#9A9797",
              margin: "1.5rem 0.6rem 0.6rem 0rem",
              padding: "1rem 1.5rem 0.9rem 1rem",
              border: "1px solid transparent",
              borderRadius: "0.3rem",
              outline: "none"
            }} />
        </div>
        <button
          className="searchBox"
          id="searchButton"
        // onClick={searchHandler}
        >Search</button>

        <div className="menuIcon">
          {/* <MenuRoundedIcon /> */}
        </div>
      </div>
    </nav>
  )
}

// @media only screen and (min-width : 320px) and (max-width : 480px) {/*--- Mobile portrait ---*/}
// @media only screen and (min-width : 480px) and (max-width : 595px) {/*--- Mobile landscape ---*/}
// @media only screen and (min-width : 595px) and (max-width : 690px) {/*--- Small tablet portrait ---*/}
// @media only screen and (min-width : 690px) and (max-width : 800px) {/*--- Tablet portrait ---*/}
// @media only screen and (min-width : 800px) and (max-width : 1024px) {/*--- Small tablet landscape ---*/}
// @media only screen and (min-width : 1024px) and (max-width : 1224px) {/*--- Tablet landscape --- */}

