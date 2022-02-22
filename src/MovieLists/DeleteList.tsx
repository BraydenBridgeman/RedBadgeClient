import * as React from 'react';
import Button from '@mui/material/Button';

import APIURL from '../Helpers/environments';

type Props = {
    sessionToken: string,
    setCreateList: any,
    createList: any,
    deleteList: any,
    setDeleteList: any
}

type State = {
    listName: string,
    movieTitle: string
}

class DeleteList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            listName: '',
            movieTitle: '',
        }
    }

    deleteList = (props: any) => {
        fetch(`${APIURL}/movieList/list/${this.props.createList.idNumber}`, {
            method: "DELETE",
            body: JSON.stringify({
                userList: { listName: this.state.listName, movieTitle: this.state.movieTitle }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(this.props.createList.idNumber);
                this.props.setCreateList(data);
                this.setState({
                    listName: this.props.createList.listName,
                    movieTitle: this.props.createList.movieTitle
                })
                alert(`Movie List Deleted!`)
            }).then(() => {
                this.setState({
                    listName: "",
                    movieTitle: ""
                })
            })
    }

    render() {
        return (
            <div>
                <Button type="submit" variant="contained" id="navbtns" onClick={this.deleteList}>Delete List</Button>
            </div>
        )
    }
}

export default DeleteList;