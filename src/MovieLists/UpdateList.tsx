import React from 'react';
import { Button } from 'reactstrap';

import APIURL from '../Helpers/environments';

type Props = {
    sessionToken: string
    setCreateList: any
    createList: any
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
        fetch(`${APIURL}/movieList/list/${props.createList.idNumber}`, {
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
            })
    }

    render() {
        return (
            <div>
                <Button id="navbtns" type="submit"
                    {...this.props.createList.map
                        ((_userList: {
                            listName: string;
                            movieTitle: string;
                        }, list: any) =>
                            <div key={list}>
                                {this.props.createList.listName}
                                {this.props.createList.movieTitle}
                            </div>
                        )}
                >Update List</Button>
            </div>
        )
    }
}

export default UpdateList;