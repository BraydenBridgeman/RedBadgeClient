import React from 'react';
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

function getMovies(): Promise<MovieAPI[]> {
    return fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`)
    .then(res => res.json())
    .then(res => {
        return res as MovieAPI[]
    })
}

getMovies();

function App() {


   return (
        <div className="App">

        </div>
    );
}

export default App;

// {/* <Login />
//             <PublicLists />
//             <RegisterUser />
//             <Search />
//             <SignIn />
//             <SiteNav />
//             <UserLists /> */}