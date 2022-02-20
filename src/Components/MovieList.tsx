import React, { useState, useEffect } from 'react';
import APIURL from '../Helpers/environments';
import { Row, Container, Card } from 'reactstrap';

import AddMovies from '../PublicList/AddMovies';
import './MovieList.css';

const MovieList = (props: any) => {

    const [allMovies, setAllMovies] = useState([]);

    useEffect(() => {
        const getMovies = () => {
            if (props.token !== '') {
                fetch(`${APIURL}/allMovies/getMovies`, {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/JSON'
                    })
                })
                    .then(response => response.json())
                    .then(data => setAllMovies(data))
            }
        }
        getMovies();
    }, [props.token])


    return (
        <div className="searchMovieList">
            <Row>
                <Container className="container">
                    <Card className="movieListCard">
                        {props.movies.map
                            ((movie: {
                                Poster: string | undefined;
                                Title: string;
                                Year: number;
                                Genre: string;
                                Plot: string;
                            }, _index: any) =>
                                <div key={_index}>
                                    <img style={{ width: "250px" }} src={movie.Poster} alt="movie poster"></img>
                                    <h2>{movie.Title}</h2>
                                    <h4>{movie.Year}</h4>
                                    <p id="genre"><span>{movie.Genre}</span></p>
                                    <p id="plot"><span>{movie.Plot}</span></p>
                                    <AddMovies movies={movie} token={props.sessionToken} movieAdd={props.movieToAdd} />
                                    <br />
                                    <br />
                                </div>
                            )}
                    </Card>
                </Container>
            </Row>
        </div>
    );
};

export default MovieList;