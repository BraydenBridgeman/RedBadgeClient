import * as React from 'react';
import Button from '@mui/material/Button';

import APIURL from '../Helpers/environments';

type Props = {
    sessionToken: string,
    setCommentReview: any,
    setDeleteComment: any,
    deleteComment: any
}

type State = {
    comment: string,
    reviewRating: number | string,
    reviewSection: string
}

class DeleteCommentsReviews extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            comment: '',
            reviewRating: 0,
            reviewSection: ''
        }
    }

    deleteComment = (props: any) => {
        console.log(this.props.setCommentReview.idNumber);
        fetch(`${APIURL}/commentReview/${this.props.setCommentReview.idNumber}`, {
            method: "DELETE",
            body: JSON.stringify({
                commentReview: {
                    comment: this.state.comment, reviewRating: this.state.reviewRating, reviewSection: this.state.reviewSection
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/JSON',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.props.setCommentReview(data);
                this.setState({
                    comment: this.state.comment,
                    reviewRating: this.state.reviewRating,
                    reviewSection: this.state.reviewSection
                })
                alert(`Only admins can delete comments!`)
            })
    }

    render() {
        return (
            <div>
                <Button variant="contained" id="navbtns" type="submit" onClick={this.deleteComment}>Delete Comment / Review</Button>
            </div>
        )
    }
}

export default DeleteCommentsReviews;