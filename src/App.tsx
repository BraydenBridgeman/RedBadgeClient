import React, { useState, useEffect } from 'react';
// import {
//     BrowserRouter,
//     Routes,
//     Route
// } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Auth/Login';
import SignIn from './Auth/SignIn';
import RegisterUser from './Auth/RegisterUser';
// import PublicLists from './Home/PublicLists';
import Search from './Components/Search';
// import SiteNav from './Home/SiteNav';
// import UserLists from './Components/UserLists';
import APIURL from './Helpers/environments';

// interface MovieAPI {
//     movieName: string,
//     yearReleased: string,
//     genre: string,
//     shortPlot: string,
//     moviePoster: string
// }

function App() {
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [sessionToken, setSessionToken] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const getMovieList = async () => {
        const res = await(await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchValue}&y=${searchValue}`)).json()
        console.log(res);
    } 

    useEffect(() => {
        getMovieList();
    }, [searchValue]);

   return (
        <div className="App">
            <RegisterUser />
            <SignIn />
            <Login />
        </div>
    );
}

export default App;

//             <Search searchValue={searchValue} setSearchValue={setSearchValue} />
//             <PublicLists />
//             <SiteNav />
//             <UserLists /> */}