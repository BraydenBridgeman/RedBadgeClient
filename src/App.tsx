import React, { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./Home/HomePage";
import Auth from "./Auth/Auth";
import MovieList from "./Components/MovieList";
import CommentsReviews from "./PublicList/Comments-Reviews";
import Search from './Components/Search';
import CreateList from "./MovieLists/CreateList";
import SiteNav from "./Auth/SiteNav";
import Footer from "./Home/Footer";

function App(this: any) {
  const [movies, setMovies] = useState<object[]>([]);
  const [movieArr1, setMovieArr1] = useState<object[]>([]);
  const [targetMovie, setTargetMovie] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sessionToken, setSessionToken] = useState("");
  const [createList, setCreateList] = useState([]);
  const [commentReview, setCommentReview] = useState([]);
  const [deleteList, setDeleteList] = useState('');
  const [updateList, setUpdateList] = useState('');
  const [updateComment, setUpdateComment] = useState('');
  const [deleteComment, setDeleteComment] = useState('');


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
        <Route path="/" element={<HomePage setDeleteList={setDeleteList} targetMovie={targetMovie} createList={createList} commentReview={commentReview} movies={movies} />} />
        <Route path="/Search" element={[<Search setSearchValue={setSearchValue} />, <MovieList sessionToken={sessionToken} setTargetMovie={setTargetMovie} movies={movieArr1} />]} />
        <Route path="/Register" element={<Auth tokenUpdate={updateToken} />} />
        <Route path="/MyMovieList" element={[<CreateList deleteList={deleteList} setCreateList={setCreateList} setUpdateList={setUpdateList} updateList={updateList} sessionToken={sessionToken} createList={createList} setDeleteList={setDeleteList} />, <CommentsReviews setCommentReview={setCommentReview} setUpdateComment={setUpdateComment} updateComment={updateComment} deleteComment={deleteComment} setDeleteComment={setDeleteComment} sessionToken={sessionToken} />]} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;