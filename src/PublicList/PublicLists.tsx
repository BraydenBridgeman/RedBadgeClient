import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PublicLists.css';

import AddMovies from './AddMovies';
import CommentsReviews from './Comments-Reviews';
// import DeleteComment from './DeleteComment';
// import UpdateComment from './UpdateComment';
// import UpdateList from './UpdateList';
import APIURL from '../Helpers/environments';

const PublicLists = (props: any) => {

    const [myList, setMyList] = useState<any[]>([]);

    useEffect(() => {
        const getMovies = () => {
            if (props.sessionToken !== '') {
                fetch(`${APIURL}/publicview/`, {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type': 'application/JSON',
                        'Authorization': `Bearer ${props.sessionToken}`
                    })
                })
                    .then(response => response.json())
                    .then(data => setMyList(data))
            }
        }
        getMovies()
        console.log(getMovies());
    }, [props, props.sessionToken])


    return (
        <div className="publicList">
            <Row>
                {myList.map(() => {
                    return (
                        <Col>
                            <Card className="listCard" key={props.idNumber}>
                                <AddMovies />
                                <img className="moviePoster" src={props.movie.Poster} alt="movie poster"></img>
                                <div>
                                    <h2 className="movieName">{props.movie.Title}</h2>
                                    <p className="movieYear">{props.movie.Year}</p>
                                    <p className="movieGenre">{props.movie.Genre}</p>
                                    <p className="moviePlot">{props.movie.Plot}</p>
                                </div>
                            </Card>
                            <br />
                            <Card className="commentCard">
                                {/* <CommentsReviews sessionToken={props.sessionToken} /> */}
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default PublicLists;