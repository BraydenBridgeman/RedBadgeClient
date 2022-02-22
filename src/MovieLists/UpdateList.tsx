import * as React from 'react';
import Button from '@mui/material/Button';

import APIURL from '../Helpers/environments';

type Props = {
    sessionToken: string
    setCreateList: any
    createList: any
    setUpdateList: any
    updateList: any
}

type State = {
    listName: string,
    movieTitle: string,
}

class UpdateList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            listName: '',
            movieTitle: '',
        }
    }

    updateList = (props: any) => {
        fetch(`${APIURL}/movieList/list/${this.props.createList.idNumber}`, {
            method: "PUT",
            body: JSON.stringify({
                userList: { listName: this.state.listName, movieTitle: this.state.movieTitle }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.props.setCreateList(data);
                console.log(this.props.createList);
                this.setState({
                    listName: this.props.createList.listName,
                    movieTitle: this.props.createList.movieTitle
                })
                alert(`Movie List Updated!`)
            }).then(() => {
                this.setState({
                    listName: '',
                    movieTitle: ''
                })
            })
    }

    render() {
        return (
            <div>
                <Button variant="contained" id="navbtns" type="submit" onClick={this.updateList}>Update List</Button>
            </div>
        )
    }
}

export default UpdateList;