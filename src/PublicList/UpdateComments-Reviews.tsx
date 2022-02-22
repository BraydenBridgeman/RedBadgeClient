import * as React from 'react';
import Button from '@mui/material/Button';
import APIURL from '../Helpers/environments';

type Props = {
    sessionToken: string,
    setCommentReview: any,
    updateComment: any,
    setUpdateComment: any
}

type State = {
    comment: string,
    reviewRating: number | string,
    reviewSection: string
}

class UpdateCommentsReviews extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            comment: '',
            reviewRating: 0,
            reviewSection: ''
        }
    }

    updateComment = (props: any) => {
        fetch(`${APIURL}/commentReview/comment-review/${this.props.setCommentReview.idNumber}`, {
            method: "PUT",
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
                alert(`Comment and review has been updated!`)
            }).then(() => {
                this.setState({
                    comment: '',
                    reviewRating: 0,
                    reviewSection: ''
                })
            })
    }

    render() {
        return (
            <div>
                <Button variant="contained" id="navbtns" type="submit" onClick={this.updateComment}>Update Comment / Review</Button>
            </div>
        )
    }

}

export default UpdateCommentsReviews;