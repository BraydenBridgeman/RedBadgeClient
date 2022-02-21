import React from 'react';
import { Button } from 'reactstrap';
import APIURL from '../Helpers/environments';
import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
    sessionToken: string,
    setTargetMovie: any,
    movies: any
}

type State = {
    movieName: string,
    yearReleased: number | string,
    genre: string,
    shortPlot: string,
    moviePoster: string
}

class AddMovies extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            movieName: props.movies.Title,
            yearReleased: props.movies.Year,
            genre: props.movies.Genre,
            shortPlot: props.movies.Plot,
            moviePoster: props.movies.Poster
        }
        console.log(props.movies);
    }

    addMoviesToList = () => {
        fetch(`${APIURL}/allMovies/movies`, {
            method: 'POST',
            body: JSON.stringify({
                movies: {
                    movieName: this.state.movieName,
                    yearReleased: this.state.yearReleased,
                    genre: this.state.genre,
                    shortPlot: this.state.shortPlot,
                    moviePoster: this.state.moviePoster
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/JSON',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.props.setTargetMovie(data);
                this.setState({
                    movieName: this.state.movieName,
                    yearReleased: this.state.yearReleased,
                    genre: this.state.genre,
                    shortPlot: this.state.shortPlot,
                    moviePoster: this.state.moviePoster
                })
                alert(`Movie Added to List!`)
            })
    }

    render() {
        return (
            <Button id="navbtns" onClick={e => { e.preventDefault(); this.addMoviesToList(); }}>
                Add Movie to My List
            </Button>
        )
    }
}

export default AddMovies;