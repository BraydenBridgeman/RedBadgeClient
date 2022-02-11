import React from 'react';

const MovieList = (props : any) => {
    return(
        <>
            {props.movies.map((movie: { Poster: string | undefined; Title: string; Year: string; Genre: string; Plot: string; }, index: any) => <div>
                <img src={movie.Poster} alt="movie poster"></img>
                <h2>{movie.Title}</h2>
                <h4>{movie.Year}</h4>
                <h4>{movie.Genre}</h4>
                <h4>{movie.Plot}</h4>
            </div>)}
        </>
    );
};

export default MovieList;