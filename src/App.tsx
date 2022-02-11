import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Auth from './Auth/Auth';
import MovieList from './Components/MovieList';
// import PublicLists from './Home/PublicLists';
import SiteNav from './Auth/SiteNav';
// import UserLists from './Components/UserLists';
// import APIURL from './Helpers/environments';

interface MovieAPI {
    movieName: string,
    yearReleased: string,
    genre: string,
    shortPlot: string,
    moviePoster: string
}

function App() {
    const [movies, setMovies] = useState([]);
    const [targetMovie, setTargetMovie] = useState({});
    const [searchValue, setSearchValue] = useState('');
    const [publicLists, setPublicLists] = useState([]);
    const [sessionToken, setSessionToken] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    // Session Token
    useEffect(() => {
        if (localStorage.getItem('token')) {
            setSessionToken(localStorage.getItem('token') || '');
        }
    }, []);

    const updateToken = (newToken : string) => {
        console.log('updateToken');
        localStorage.setItem('token', newToken);
        setSessionToken(newToken);
    }

    const clearToken = () => {
        localStorage.clear();
        setSessionToken('');
        console.log('clearToken');
    }

    // Calling API for Movie Name, Year Released, Movie Poster, Genre, Short Plot
    const getMovieList = async () => {
        for(let i = 0; i < 10; i++) {
            // First API Call
            const res = await(await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchValue}`)).json()
            console.log(res);
            console.log(i);
    
            // Movie Name
            const movieName = res.Search[i].Title;
            console.log(movieName);
    
            // Year Released
            const yearReleased = res.Search[i].Year;
            console.log(yearReleased);
    
            // Movie Poster
            const moviePoster = res.Search[i].Poster;
            console.log(moviePoster);
    
            // Second API Call
            const apiRES = await(await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${movieName}&y=${yearReleased}`)).json()
            console.log(apiRES);
            setTargetMovie(apiRES);
    
            // Genre
            const genre = apiRES.Genre;
            console.log(genre);
            
            // Short Plot
            const shortPlot = apiRES.Plot;
            console.log(shortPlot);
    
            if (res.Search) {
                setMovies(res.Search);
            } else if (apiRES.Genre) {
                setMovies(apiRES.Genre)
            } else if (apiRES.Plot) {
                setMovies(apiRES.Plot);
            }
        }
    }

    useEffect(() => {
        if (searchValue){
            getMovieList();
        }
    }, [searchValue]);

   return (
        <div className="App">
            <SiteNav setSearchValue={setSearchValue} sessionToken={sessionToken} tokenUpdate={updateToken} logout={clearToken} />
            <Auth tokenUpdate={updateToken} />
            <MovieList targetMovie={targetMovie} movies={movies} />
        </div>
    );
}

export default App;