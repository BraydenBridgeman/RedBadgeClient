import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './UserLists.css';

import AddMovies from '../PublicList/AddMovies';
import CommentsReviews from '../PublicList/Comments-Reviews';
// import DeleteComment from './DeleteComment';
// import UpdateComment from './UpdateComment';
// import UpdateList from './UpdateList';
import APIURL from '../Helpers/environments';

type Props = {
    sessionToken: string
}

type State = {
    listName: string,
    movieTitle: string,
    hasWatched: boolean,
    toWatch: boolean,
    selectedOption: string
}

class UserList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            listName: '',
            movieTitle: '',
            hasWatched: false,
            toWatch: false,
            selectedOption: ""
        };
        this.onChangeValue = this.onChangeValue.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    onChangeValue(event: any) {
        this.setState({
            selectedOption: event.target.value
        });
        console.log(event.target.value);
    }

    formSubmit(event: any) {
        event.preventDefault();
        console.log(this.state.selectedOption);
    }

    handleSubmit = () => {
        fetch(`${APIURL}/userList/list`, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/JSON',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    listName: '',
                    movieTitle: '',
                    hasWatched: false,
                    toWatch: false
                })
                console.log(data);
                alert(`New List Created!`)
            })
    }

    render() {
        return (
            <div className="userList">
                <h1>Welcome to your Movie List</h1>
                <Form inline onSubmit={e => { e.preventDefault(); this.handleSubmit(); this.formSubmit(e); }}>
                    <FormGroup>
                        <Label htmlFor="listName">Movie List Name:</Label>
                        <Input name="listname"
                            value={this.state.listName}
                            onChange={(e) => this.setState({ listName: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="hasWatched">Have you watched this? </Label>
                        <br />
                        <Input type="radio"
                            value="Yes"
                            name="watched"
                            checked={this.state.selectedOption === "Yes"} onChange={this.onChangeValue} />  Yes
                            <br />
                        <Input type="radio"
                            value="No"
                            name="watched"
                            checked={this.state.selectedOption === "No"}
                            onChange={this.onChangeValue} />  No
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="toWatch">Watch Later? </Label>
                        <br />
                        <Input type="radio" value="Yes"
                            name="watched"
                            checked={this.state.selectedOption === "Yes"} onChange={this.onChangeValue} />  Yes
                            <br />
                        <Input type="radio"
                            value="No"
                            name="watched"
                            checked={this.state.selectedOption === "No"}
                            onChange={this.onChangeValue} />  No
                    </FormGroup>
                    <div>
                        {this.state.selectedOption}
                    </div>
                    <Button className="btn btn-default" type="submit">
                        Submit!
                    </Button>
                    <br />
                    <br />
                    <br /> 
                    <CommentsReviews
                    sessionToken={this.props.sessionToken} />
                </Form>
            </div>
        )
    }
}

export default UserList;