import React, {useState, useEffect} from 'react';
import {Card, Col, Row} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './PublicLists.css';

import AddMovies from './AddMovies';
import CommentsReviews from './Comments-Reviews';
// import DeleteComment from './DeleteComment';
// import UpdateComment from './UpdateComment';
// import UpdateList from './UpdateList';
import APIURL from '../Helpers/environments';

const PublicLists = (props : any) => {

    const [myList, setMyList] = useState<any[]>([]);

    useEffect(() => {
        getMovies()
    }, [])

    const getMovies = () => {
        if (props.sessionToken !== '') {
            fetch(`${APIURL}/publicview`, {
                method: 'GET',
                headers: new Headers ({
                    'Content-Type' : 'application/JSON',
                    'Authorization' : `Bearer ${props.sessionToken}`
                })
            })
            .then(response => response.json())
            .then(data => setMyList(data))
        }
    }

    return (
        <div className="publicList">
            <Row>
                {myList.map(result => {
                    return (
                        <Col>
                        <Card className="listCard">
                        <img className="moviePoster" src={result.movie.Poster} alt="movie poster"></img>
                        <div>
                            <h2 className="movieName">{result.movie.Title}</h2>
                            <p className="movieYear">{result.movie.Year}</p>
                            <p className="movieGenre">{result.movie.Genre}</p>
                            <p className="moviePlot">{result.movie.Plot}</p>
                        </div>
                        </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default PublicLists;