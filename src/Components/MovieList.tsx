import React, { useState, useEffect } from 'react';
import APIURL from '../Helpers/environments';

const MovieList = (props : any) => {

    // const [allMovies, setAllMovies] = useState([]);

    // useEffect(() => {
    //     getMovies();
    // }, [])

    // const getMovies = () => {
    //     if (props.token !== '') {
    //         fetch(`${APIURL}/allMovies/getMovies`, {
    //             method: 'GET',
    //             headers: new Headers({
    //                 'Content-Type' : 'application/JSON'
    //             })
    //         })
    //         .then(response => response.json())
    //         .then(data => setAllMovies(data))
    //     }
    // }

    return(
        <>
            {props.movies.map
            ((movie: { Poster: string | undefined; 
            Title: string; 
            Year: number; 
            Genre: string; 
            Plot: string; }, index: any) => 
            <div>
                <img src={movie.Poster} alt="movie poster"></img>
                <h2>{movie.Title}</h2>
                <h4>{movie.Year}</h4>
                <p>{movie.Genre}</p>
                <p>{movie.Plot}</p>
            </div>
            )}
        </>
    );
};

export default MovieList;