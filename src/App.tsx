import React, { useState, useEffect } from 'react';
// import {
//     BrowserRouter,
//     Routes,
//     Route
// } from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// import Login from './Auth/Login';
// import SignIn from './Auth/SignIn';
// import RegisterUser from './Auth/RegisterUser';
// import PublicLists from './Home/PublicLists';
// import Search from './Components/Search';
// import SiteNav from './Home/SiteNav';
// import UserLists from './Components/UserLists';

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

    const getMovieList = async () => {
        const res = await(await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchValue}&y=${searchValue}`)).json()
        console.log(res);
    } 

    useEffect(() => {
        getMovieList();
    }, [searchValue]);

   return (
        <div className="App">
            {/* <Search /> */}
        </div>
    );
}

export default App;

// {/* <Login />
//             <Search searchValue={searchValue} setSearchValue={setSearchValue} />
//             <PublicLists />
//             <RegisterUser />
//             <SignIn />
//             <SiteNav />
//             <UserLists /> */}