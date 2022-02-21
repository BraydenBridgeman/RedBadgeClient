import React from 'react';
import { Button } from 'reactstrap';

import APIURL from '../Helpers/environments';

type Props = {
    sessionToken: string,
    setCommentReview: any
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
        fetch(`${APIURL}/commentReview/comment-review/${this.props.setCommentReview.idNumber}`, {
            method: "DELETE",
            body: JSON.stringify({
                commentReview: {
                    comment: this.state.comment, reviewRating: this.state.reviewRating, reviewSection: this.state.reviewSection
                }
            }),
            headers: new Headers({
                'Content-Type' : 'application/JSON',
                'Authorization' : `Bearer ${this.props.sessionToken}`
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
            alert(`Comment and Review Deleted!`)
        })
    }

    render() {
        return (
            <div>
                <Button id="navbtns" type="submit"
                {...this.props.setCommentReview.map
                ((_commentList: {
                    comment: string;
                    reviewRating: number | string;
                    reviewSection: string;
                }, aList: any) =>
                <div key={aList}>
                    {this.props.setCommentReview.comment}
                    {this.props.setCommentReview.reviewRating}
                    {this.props.setCommentReview.reviewSection}
                    </div>
                )}>Delete Comment / Review</Button>
            </div>
        )
    }
}

export default DeleteCommentsReviews;