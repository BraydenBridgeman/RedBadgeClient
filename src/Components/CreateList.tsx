import React, {useState} from 'react';
import { Button, Form, Row, Col, Input } from 'reactstrap';

import APIURL from '../Helpers/environments';

type Props = {
    sessionToken: string,
    fetch: () => void,
    listOff: () => void
}

type State = {
    listName: string,
    movieTitle: string,
    hasWatched: boolean,
    toWatch: boolean
}

class CreateList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            listName: '',
            movieTitle: '',
            hasWatched: false,
            toWatch: false
        }
    }

    handleSubmit = () => {
        fetch(`${APIURL}/movieList/list`, {
            method: 'POST',
            body: JSON.stringify({ movieList: { listName: this.state.listName, movieTitle: this.state.movieTitle, hasWatched: this.state.hasWatched, toWatch: this.state.hasWatched } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((movieListData) => {
                console.log(movieListData);
                this.setState({
                    listName: '',
                    movieTitle: '',
                    hasWatched: true,
                    toWatch: true
                })
                this.props.fetch();
                this.props.listOff();
            })
            .catch((err) => console.log(err))
    }

    close = () => {
        this.props.listOff();
    }

    render() {
        return (
            <div>
                <Form inline onSubmit={e => { e.preventDefault(); this.handleSubmit(); }} className="listForm">
                    <Row>
                        <Col>
                            <h1 style={{}}>Create your Movie List</h1>
                        </Col>
                        <Col>
                            <Input name="listName" 
                            value={this.state.listName} 
                            onChange={(e) => this.setState({ listName: e.target.value })} 
                            placeholder="List Name" />
                        </Col>
                        <Col>
                            <Input name="movieTitle" 
                            value={this.state.movieTitle} 
                            onChange={(e) => this.setState({ movieTitle: e.target.value })} 
                            placeholder="Movie Titles" />
                        </Col>
                        <Col>
                            <Button id="Btns" type='submit'>Submit!</Button>
                            <Button id="Btns" onClick={() => this.close()}>Close</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default CreateList;