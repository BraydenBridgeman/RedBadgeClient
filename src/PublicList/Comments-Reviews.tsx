import * as React from 'react';
import { Form } from 'reactstrap';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormHelperText from '@mui/material/FormHelperText';
import 'bootstrap/dist/css/bootstrap.min.css';
import APIURL from '../Helpers/environments';
import UpdateCommentsReviews from './UpdateComments-Reviews';
import DeleteCommentsReviews from './DeleteComments-Reviews';

type Props = {
    sessionToken: string,
    setCommentReview: any,
    updateComment: any,
    setUpdateComment: any,
    deleteComment: any,
    setDeleteComment: any
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
                alert(`Comment and review posted!`)
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
            <div className="comments-review">
                <h1 id="movieListTitle">Comment and Review This List</h1>
                <Form inline onSubmit={e => { e.preventDefault(); this.handleSubmit(); }}>
                    <br />
                    <br />
                    <br />
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Username</InputLabel>
                        <Input type="textarea" id="outlined-multiline-flexible"
                            multiline
                            maxRows={4} name="username" placeholder="Username" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
                    </FormControl>
                    <br />
                    <br />
                    <br />
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Comment</InputLabel>
                        <Input type="textarea" id="outlined-multiline-flexible"
                            multiline
                            maxRows={4}
                            name="comment" placeholder="Comment" value={this.state.comment} onChange={(e) => this.setState({ comment: e.target.value })} />
                    </FormControl>
                    <br />
                    <br />
                    <br />
                    <FormControl>
                        <InputLabel htmlFor="component-outlined"></InputLabel>
                        <TextField inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id="filled-number" label="Number Rating of List" type="number" onChange={(e) => this.setState({ reviewRating: e.target.value })}>
                        </TextField>
                        <FormHelperText id="component-error-text">We recommend rating between 1-5</FormHelperText>
                    </FormControl>
                    <br />
                    <br />
                    <FormControl>
                        <InputLabel htmlFor="component-outlined">Review Section</InputLabel>
                        <Input type="textarea" id="outlined-multiline-flexible"
                            multiline
                            maxRows={4} name="reviewSection" placeholder="Short Review" value={this.state.reviewSection} onChange={(e) => this.setState({ reviewSection: e.target.value })} />
                    </FormControl>
                    <br />
                    <br />
                    <Button variant="contained" id="navbtns" type="submit">Submit Comment / Review</Button>
                    <br />
                    <br />
                    <UpdateCommentsReviews sessionToken={this.props.sessionToken} setCommentReview={this.props.setCommentReview} updateComment={this.props.updateComment} setUpdateComment={this.props.setUpdateComment} />
                    <br />
                    <DeleteCommentsReviews sessionToken={this.props.sessionToken} setCommentReview={this.props.setCommentReview} setDeleteComment={this.props.setDeleteComment} deleteComment={this.props.deleteComment} />
                </Form>
                <br />
                <br />
            </div>
        )
    }
}

export default CommentsReviews;