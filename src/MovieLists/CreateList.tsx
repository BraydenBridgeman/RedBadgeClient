import * as React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import Button from '@mui/material/Button';

import APIURL from '../Helpers/environments';
import UpdateList from './UpdateList';
import DeleteList from './DeleteList';

import './CreateList.css';

type Props = {
    sessionToken: string,
    setCreateList: any,
    createList: any,
    updateList: any,
    setUpdateList: any,
    deleteList: any,
    setDeleteList: any
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
                this.setState({
                    listName: this.state.listName,
                    movieTitle: this.state.movieTitle
                })
                alert(`Movie list created!`)
            }).then(() => {
                this.setState({
                    listName: "",
                    movieTitle: ""
                })
            })
    }

    render() {
        return (
            <div className="comments-review">
                <h1 id="movieListTitle">Create your Movie List</h1>
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
                    <Button type="submit" id="navbtns" variant="contained">Create List</Button>
                    <br />
                    <br />
                    <UpdateList sessionToken={this.props.sessionToken} createList={this.props.createList} setCreateList={this.props.setCreateList} setUpdateList={this.props.setUpdateList} updateList={this.props.updateList} />
                    <br />
                    <DeleteList setDeleteList={this.props.setDeleteList} sessionToken={this.props.sessionToken} createList={this.props.createList} setCreateList={this.props.setCreateList} deleteList={this.props.deleteList} />
                </Form>
                <br />
                <br />
                <br />
            </div>
        )
    }
}

export default CreateList;