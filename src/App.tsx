import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./Home/HomePage";
import Auth from "./Auth/Auth";
import MovieList from "./Components/MovieList";
import CommentsReviews from "./PublicList/Comments-Reviews";
import Search from './Components/Search';
// import PublicLists from './Home/PublicLists';
import SiteNav from "./Auth/SiteNav";
// import UserLists from './Components/UserLists';
// import APIURL from './Helpers/environments';

interface MovieAPI {
  movieName: string;
  yearReleased: string;
  genre: string;
  shortPlot: string;
  moviePoster: string;
}

function App() {
  const [movies, setMovies] = useState<object[]>([]);
  const [movieArr1, setMovieArr1] = useState<object[]>([]);
  const [targetMovie, setTargetMovie] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [publicLists, setPublicLists] = useState([]);
  const [sessionToken, setSessionToken] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  // Session Token
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setSessionToken(localStorage.getItem("token") || "");
    }
  }, []);

  const updateToken = (newToken: string) => {
    console.log("updateToken");
    localStorage.setItem("token", newToken);
    setSessionToken(newToken);
  };

  const clearToken = () => {
    localStorage.clear();
    setSessionToken("");
    console.log("clearToken");
  };

  const movieArr: object[] = [];

  // Calling API for Movie Name, Year Released, Movie Poster, Genre, Short Plot
  const getMovieList = async () => {
    // First API Call
    try {
      const res = await (
        await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchValue}`)
      ).json();

      console.log(res);

      if (res.Search) {
        setMovies(res.Search);
        for (let i = 0; i < movies.length; i++) {
          const apiRes: {
            Genre: string;
            Plot: string;
          } = await (
            await fetch(
              `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${res.Search[i].Title}&y=${res.Search[i].Year}`
            )
          ).json();
          movieArr.push({ ...apiRes });
        }
        setMovieArr1(movieArr);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (searchValue) {
      getMovieList();
    }
  }, [searchValue]);

  return (
    <div className="App">
      <SiteNav setSearchValue={setSearchValue} sessionToken={sessionToken} tokenUpdate={updateToken} logout={clearToken} />
      <Routes>
        <Route path="/Home" element={<HomePage movies={movies} />} />
        <Route path="/Search" element={<Search setSearchValue={setSearchValue} />} />
        <Route path="/Comments-Reviews" element={<CommentsReviews sessionToken={sessionToken} />} />
        <Route path="/Register" element={<Auth tokenUpdate={updateToken} />} />
        <Route path="/Movies" element={<MovieList targetMovie={targetMovie} movies={movieArr1} />} />
      </Routes>
    </div>
  );
}

export default App;