import React, { useEffect, useState } from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, Row, Table } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import APIURL from '../Helpers/environments';

const HomePage = (props: any) => {

    const [allLists, setAllLists] = useState([]);

    useEffect(() => {
        const getAllLists = () => {
            if (props.token !== '') {
                fetch(`${APIURL}/publicview`, {
                    method: 'GET',
                    headers: new Headers({
                        'Content-Type' : 'application/json'
                    })
                })
                .then(response => response.json())
                .then(data => setAllLists(data))
        }
    }
    getAllLists();
}, [props.token])

    return (
        <div>
            <Card className="homePageCard">
                <CardBody>
                    <CardTitle className="header">
                        Welcome to Your Movie Lists
                    </CardTitle>
                    <CardSubtitle
                        className="mb-2">
                        Find Movies. Add them to your List.
                    </CardSubtitle>
                </CardBody>
                <div className="moviePosterDiv">
                    <Row xs="1" sm="2" md="4">
                        <img className="homePageImage"
                            alt="Movie Poster"
                            src={'http://img.omdbapi.com/?apikey=e0e1a4b&i=tt7657566'}
                        />
                        <img className="homePageImage"
                            alt="Movie Poster"
                            src={'http://img.omdbapi.com/?apikey=e0e1a4b&i=tt11271038'}
                        />
                        <img className="homePageImage"
                            alt="Movie Poster"
                            src={'http://img.omdbapi.com/?apikey=e0e1a4b&i=tt11466222'}
                        />
                        <img className="homePageImage"
                            alt="Movie Poster"
                            src={'http://img.omdbapi.com/?apikey=e0e1a4b&i=tt5834426'}
                        />
                        <img className="homePageImage"
                            alt="Movie Poster"
                            src={'http://img.omdbapi.com/?apikey=e0e1a4b&i=tt10872600'}
                        />
                        <img className="homePageImage"
                            alt="Movie Poster"
                            src={'http://img.omdbapi.com/?apikey=e0e1a4b&i=tt6856242'}
                        />
                    </Row>
                    <br />
                    <br />
                    <br />
                    <Table id="listID">
                        <thead>
                            <tr>
                                <th id="tableHeader">
                                    List Name
                                </th>
                                <th id="tableHeader">
                                    Movie Title
                                </th>
                                <th id="tableHeader">
                                    Movie Name
                                </th>
                                <th id="tableHeader">
                                    Movie Poster
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th id="rowName" scope="row">{props.createList.listName}</th>
                                <td id="rowName">{props.createList.movieTitle}</td>
                                <td id="rowName">{props.targetMovie.movieName}</td>
                                <td id="rowName"><img style={{ width: "100px" }} src={props.targetMovie.moviePoster} alt="" /></td>
                            </tr>
                        </tbody>
                    </Table>
                    <br />
                    <br />
                    <Card className="commentCard">
                        <CardBody>
                            <CardTitle className="commentHeader">
                                <h1 id="reviewHeader">Comments / Review About this List</h1>
                            </CardTitle>
                            <Row>
                                <h1 id="usernameHeader">Username: <p id="usernameHeader2">{props.commentReview.username}</p></h1>
                                <p id="commentList"><h2 id="commentHeader">COMMENT</h2> {props.commentReview.comment}</p>
                                <br />
                                <p id="commentList"><h2 id="commentHeader">REVIEW RATING</h2> {props.commentReview.reviewRating}</p>
                                <br />
                                <p id="commentList"><h2 id="commentHeader">REVIEW SECTION</h2> {props.commentReview.reviewSection}</p>
                            </Row>
                        </CardBody>
                    </Card>
                </div>
            </Card>
        </div>
    )
}

export default HomePage;