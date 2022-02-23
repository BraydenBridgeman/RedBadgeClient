import * as React from 'react';
import { Form } from 'reactstrap';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';

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
                <br />
                <br />
                <Form inline onSubmit={(e) => { e.preventDefault(); this.handleSubmit(); }} className="listForm">
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">List Name</InputLabel>
                        <Input id="outlined-multiline-flexible"
                            multiline
                            maxRows={4} name="listname" placeholder="User List Name" value={this.state.listName}
                            onChange={(e) => this.setState({
                                listName: e.target.value
                            })} />
                    </FormControl>
                    <br />
                    <br />
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Movie Titles</InputLabel>
                        <Input type="textarea" id="outlined-multiline-flexible"
                            multiline
                            maxRows={4} value={this.state.movieTitle}
                            onChange={(e) => this.setState({ movieTitle: e.target.value })}
                            placeholder="Watchlist" />
                    </FormControl>
                    <br />
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