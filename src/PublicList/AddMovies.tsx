// import React from 'react';
// import { Button } from 'reactstrap';

// import APIURL from '../Helpers/environments';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import './AddMovies.css';

// const AddMovies = (props: any) => {

//     let movieAdd = (id: number) => {
//         let arrayId = id - 1;
//         let movie = props.movies[arrayId];
//         let movieName = movie.Title;
//         let yearReleased = movie.Year;
//         let moviePoster = movie.Poster;
//         let genre = movie.Genre;
//         let shortPlot = movie.Plot;
//         console.log(movie);
//         console.log(movieName, yearReleased, moviePoster, genre, shortPlot, props.sessionToken);

//         handleSubmit = (event : any) => {
//             event.preventDefault();
//             console.log(APIURL);
//             fetch(`${APIURL}/movies/movies`, {
//                 method: "POST",
//                 body: JSON.stringify({
//                     movies: {
//                         movieName: movieName,
//                         yearReleased: yearReleased,
//                         genre: genre,
//                         shortPlot: shortPlot,
//                         moviePoster: moviePoster
//                     }
//                 }),
//                 headers: new Headers({
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${props.sessionToken}`,
//                 })
//             }).then((response) => response.json())
//         }
//     }

//     return (
//         <Button onSubmit={e => {e.preventDefault(); handleSubmit(e)}} className="addMovieToList" onClick={(e) = movieAdd(props.movieToAdd)}>
//             Add Movie to My List
//         </Button>
//     )

// }

// export default AddMovies;
export {};