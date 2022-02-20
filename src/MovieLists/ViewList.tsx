import React, { useState, useEffect } from 'react';
import { Card, Col, Row } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ViewList.css';

import CommentsReviews from '../PublicList/Comments-Reviews';
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
        <div className="viewList">
            <Row>
                {myList.map(() => {
                    return (
                        <Col>
                            <Card className="listCard" key={props.idNumber}>
                                <img className="moviePoster" src={props.movies.Poster} alt="movie poster"></img>
                                <div>
                                    <h2 className="movieName">{props.movies.Title}</h2>
                                    <p className="movieYear">{props.movies.Year}</p>
                                    <p className="movieGenre">{props.movies.Genre}</p>
                                    <p className="moviePlot">{props.movies.Plot}</p>
                                </div>
                            </Card>
                            <br />
                            <Card className="commentCard">
                                <CommentsReviews sessionToken={props.sessionToken} />
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default PublicLists;