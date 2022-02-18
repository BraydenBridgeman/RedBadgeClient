import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./Home/HomePage";
import Auth from "./Auth/Auth";
import MovieList from "./Components/MovieList";
import UserIndex from "./Components/UserIndex";
import CommentsReviews from "./PublicList/Comments-Reviews";
import Search from './Components/Search';
import UserLists from "./Components/UserLists";
import SiteNav from "./Auth/SiteNav";
// import APIURL from './Helpers/environments';

function App(this: any) {
  const [movies, setMovies] = useState<object[]>([]);
  const [movieArr1, setMovieArr1] = useState<object[]>([]);
  const [targetMovie, setTargetMovie] = useState({});
  const [searchValue, setSearchValue] = useState("");
  const [publicLists, setPublicLists] = useState([]);
  const [sessionToken, setSessionToken] = useState("");

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

  const adminView = () => {
    return sessionToken === localStorage.getItem('sessionToken')
    ?
    (
      <Router>
        <SiteNav sessionToken={sessionToken} logout={clearToken} tokenUpdate={updateToken} setSearchValue={setSearchValue} />
      </Router>
    ) : (
      <Auth tokenUpdate={updateToken} />
    )
  }

  const movieArr: object[] = [];

  // Calling API for Movie Name, Year Released, Movie Poster, Genre, Short Plot
  const getMovieList = async () => {
    // First API Call
    try {
      const res = await (
        await fetch(`https://www.omdbapi.com/?apikey=e0e1a4b&s=${searchValue}`)
        ).json();        
        if (res.Search) {
          setMovies(res.Search);
          for (let i = 0; i < movies.length; i++) {
            const apiRes: {
              Genre: string;
              Plot: string;
            } = await (
              await fetch(
                `https://www.omdbapi.com/?apikey=e0e1a4b&t=${res.Search[i].Title}&y=${res.Search[i].Year}`
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
        <Route path="/" element={<HomePage movies={movies} />} />
        <Route path="/Search" element={[<Search setSearchValue={setSearchValue} /> , <MovieList targetMovie={targetMovie} movies={movieArr1} />]} />
        <Route path="/Register" element={<Auth tokenUpdate={updateToken} />} />
        <Route path="/MyMovieList" element={[<UserIndex />, <UserLists sessionToken={sessionToken} />]} /> 
      </Routes>
    </div>
  );
}

export default App;