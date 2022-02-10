import React, { useState, useEffect } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Auth from './Auth/Auth';
// import PublicLists from './Home/PublicLists';
// import Search from './Components/Search';
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

    // Calling API for Movies
    const getMovieList = async () => {
        const res = await(await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchValue}`)).json()
        console.log(res);
    }

    useEffect(() => {
        if (searchValue){
            getMovieList();
        }
    }, [searchValue]);

   return (
        <div className="App">
            <SiteNav setSearchValue={setSearchValue} sessionToken={sessionToken} tokenUpdate={updateToken} logout={clearToken}/>
            <Auth tokenUpdate={updateToken} />
        </div>
    );
}

export default App;