import React from 'react';

import APIURL from '../Helpers/environments';

import 'bootstrap/dist/css/bootstrap.min.css';
import './AddMovies.css';

// const AddMovies = (props : any) => {

//     let movieAdd = (id) => {
//         let arrayId = id - 1;
//         let movie = props.movies[arrayId];
//         let movieName = movie.Title;
//         let yearReleased = movie.Year;
//         let moviePoster = movie.Poster;
//         let genre = movie.Genre;
//         let shortPlot = movie.Plot;
//         console.log(movie);
//         console.log(movieName, yearReleased, moviePoster, genre, shortPlot, props.sessionToken);

//         fetch(`${APIURL}movies/movies`, {
//             method: "POST",
//             body: JSON.stringify({
//                 movies: {
//                     movieName: movieName,
//                     yearReleased: yearReleased,
//                     genre: genre,
//                     shortPlot: shortPlot,
//                     moviePoster: moviePoster
//                 }
//             }),
//             headers: new Headers({
//                 'Content-Type' : 'application/json',
//                 'Authorization' : 'Bearer ' + props.sessionToken,
//             })
//         }).then((response) => response.json())
//     }

//     return(
//         <Button className="addMovieToList" onClick={() = movieAdd(props.movieToAdd)}>
//             Add Movie to My List
//         </Button>
//     )

// }
export {}
// export default AddMovies;