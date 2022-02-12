import React, { useState, useEffect } from 'react';
import APIURL from '../Helpers/environments';

const MovieList = (props: any) => {

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

    return (
        <>
            {props.movies.map
                (async (movie: {
                    Poster: string | undefined;
                    Title: string;
                    Year: string;
                }, index: number) => {
                    // const apiRES: {
                    //     Search : {
                    //         Genre: string,
                    //         Plot: string
                    //     }[]
                    // } = await(await fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${movie.Title}&y=${movie.Year}`)).json()
                    // console.log(apiRES);
                    return (
                        <div>
                            {/* <img src={movie.Poster} alt="movie poster"></img>
                <h2>{movie.Title}</h2>
                <h4>{movie.Year}</h4> */}
                            {/* <p>{apiRES.Search[index].Genre}</p>
                <p>{apiRES.Search[index].Plot}</p> */}
                        </div>
                    )
                }
                )}
        </>
    );
};

export default MovieList;