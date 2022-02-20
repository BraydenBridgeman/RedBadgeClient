import React from 'react';
import { Button, Form, Row, Col, Input } from 'reactstrap';

import APIURL from '../Helpers/environments';

type Props = {
    sessionToken: string
}

type State = {
    listName: string,
    movieTitle: string,
}

class CreateList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            listName: '',
            movieTitle: ''
        }
    }

    handleSubmit = () => {
        fetch(`${APIURL}/movieList/list`, {
            method: 'POST',
            body: JSON.stringify({ userList: { listName: this.state.listName, movieTitle: this.state.movieTitle } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    listName: '',
                    movieTitle: ''
                })
            })
    }

    render() {
        return (
            <div>
                <Form inline onSubmit={(e) => { e.preventDefault(); this.handleSubmit(); }} className="listForm">
                    <Row>
                        <Col>
                            <h1>Create your Movie List</h1>
                        </Col>
                        <br />
                        <br />
                        <Row>
                            <Col>
                                <Input name="listName"
                                    value={this.state.listName}
                                    onChange={(e) => this.setState({ listName: e.target.value })}
                                    placeholder="List Name" />
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <Row>
                            <Col>
                                <Input name="movieTitle"
                                    value={this.state.movieTitle}
                                    onChange={(e) => this.setState({ movieTitle: e.target.value })}
                                    placeholder="Movie Titles" />
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <Col>
                            <Button id="Btns" type='submit'>Submit!</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        )
    }
}

export default CreateList;