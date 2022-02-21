import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import APIURL from '../Helpers/environments';
// import UpdateList from './UpdateList';

type Props = {
    sessionToken: string,
    setCreateList: any,
    createList: any
}

type State = {
    listName: string,
    movieTitle: string
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
        fetch(`${APIURL}/movieList/list/`, {
            method: 'POST',
            body: JSON.stringify({ userList: { listName: this.state.listName, movieTitle: this.state.movieTitle } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.props.setCreateList(data);
                console.log(data.movieTitle);
                this.setState({
                    listName: this.state.listName,
                    movieTitle: this.state.movieTitle
                })
                alert(`Movie List Created!`)
            })
    }

    render() {
        return (
            <div className="comments-review">
                <h1>Create your Movie List</h1>
                <Form inline onSubmit={(e) => { e.preventDefault(); this.handleSubmit(); }} className="listForm">
                    <FormGroup>
                        <Label htmlFor="listname">List Name</Label>
                        <Input type="textarea" name="listname" value={this.state.listName}
                            onChange={(e) => this.setState({
                                listName: e.target.value
                            })}
                            placeholder="User List Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="movieTitle">Movie Titles</Label>
                        <Input type="textarea" name="movieTitle" value={this.state.movieTitle}
                            onChange={(e) => this.setState({ movieTitle: e.target.value })}
                            placeholder="Add your watchlist of movie titles here" />
                    </FormGroup>
                    <br />
                    <Button id="navbtns" type="submit">Create List</Button>
                    {/* <UpdateList sessionToken={this.props.sessionToken} createList={this.props.createList} setCreateList={this.props.setCreateList} /> */}
                </Form>
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default CreateList;