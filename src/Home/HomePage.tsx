import React from 'react';
import { Card, CardBody, CardSubtitle, CardTitle, Row } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';

const HomePage = (props: any) => {

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
                </div>
            </Card>
        </div>
    )
}

export default HomePage;