import React, { useState, useEffect } from 'react';
import APIURL from '../Helpers/environments';
import { Row, Col, Card } from 'reactstrap';

import AddMovies from '../PublicList/AddMovies';

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
            <Row xs="1" sm="2" md="4">
                <Col className="bg-light border" xs="6">
                    <Card className="movieListCard" style={{ width: "100%" }}>
                        {props.movies.map
                            ((movie: {
                                Poster: string | undefined;
                                Title: string;
                                Year: number;
                                Genre: string;
                                Plot: string;
                            }, _index: any) =>
                                <div key={_index}>
                                    <img style={{ width: "250px"}} src={movie.Poster} alt="movie poster"></img>
                                    <h2>{movie.Title}</h2>
                                    <h4>{movie.Year}</h4>
                                    <p>{movie.Genre}</p>
                                    <p>{movie.Plot}</p>
                                    <AddMovies movies={movie} token={props.sessionToken} movieAdd={props.movieToAdd} />
                                </div>
                            )}
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default MovieList;