import React from 'react';
import { Button } from 'reactstrap';

import APIURL from '../Helpers/environments';

import 'bootstrap/dist/css/bootstrap.min.css';
import './AddMovies.css';

const AddMovies = (props: any) => {

    let movieAdd = (id: number) => {
        console.log(props.movies.Title);
        let arrayId = id - 1;
        let movies = props.movies[arrayId];
        let movieName = props.movies.Title;
        let yearReleased = props.movies.Year;
        let moviePoster = props.movies.Poster;
        let genre = props.movies.Genre;
        let shortPlot = props.movies.Plot;
        console.log(movies);
        console.log(movieName, yearReleased, moviePoster, genre, shortPlot, props.sessionToken);

        fetch(`${APIURL}/movies/movies`, {
            method: "POST",
            body: JSON.stringify({
                movies: {
                    movieName: movieName,
                    yearReleased: yearReleased,
                    genre: genre,
                    shortPlot: shortPlot,
                    moviePoster: moviePoster
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/JSON',
                'Authorization': `Bearer ${props.sessionToken}`,
            })
        }).then((response) => response.json())
    }

    return (
        <Button className="addMoviesButton" onClick={() => movieAdd(props.movieToAdd)}>
            Add Movie to My List
        </Button>
    )

}

export default AddMovies;