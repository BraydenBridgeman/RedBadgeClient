import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import APIURL from '../Helpers/environments';

type Props = {
    sessionToken: string,
    setCommentReview: any
}

type State = {
    username: string,
    comment: string,
    reviewRating: number | string,
    reviewSection: string
}

class CommentsReviews extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            username: '',
            comment: '',
            reviewRating: 0,
            reviewSection: ''
        }
    }


    handleSubmit = () => {
        fetch(`${APIURL}/commentReview/comment-review`, {
            method: 'POST',
            body: JSON.stringify({ commentReview: { username: this.state.username, comment: this.state.comment, reviewRating: this.state.reviewRating, reviewSection: this.state.reviewSection } }),
            headers: new Headers({
                'Content-Type': 'application/JSON',
                'Authorization': `Bearer ${this.props.sessionToken}`
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.props.setCommentReview(data);
                this.setState({
                    username: this.state.username,
                    comment: this.state.comment,
                    reviewRating: this.state.reviewRating,
                    reviewSection: this.state.reviewSection
                })
                alert(`Comment and Review Posted!`)
            })
    }

    render() {
        return (
            <div className="comments-review">
                <h1>Comment and Review This List</h1>
                <Form inline onSubmit={e => { e.preventDefault(); this.handleSubmit(); }}>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input type="textarea" name="username" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="comment">Comment</Label>
                        <Input type="textarea"
                            name="comment" value={this.state.comment} onChange={(e) => this.setState({ comment: e.target.value })} />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="reviewRating">Review Rating "0-5"</Label>
                        <Input type="select" name="select" onChange={(e) => this.setState({ reviewRating: e.target.value })}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="reviewSection">Review Section</Label>
                        <Input type="textarea" name="reviewSection" value={this.state.reviewSection} onChange={(e) => this.setState({ reviewSection: e.target.value })} />
                    </FormGroup>
                    <br />
                    <Button id="navbtns" type="submit">Submit Comment / Review</Button>
                </Form>
            </div>
        )
    }
}

export default CommentsReviews;