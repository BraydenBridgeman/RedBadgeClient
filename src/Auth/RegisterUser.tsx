import React from 'react';
import { Form, FormGroup, Input, Button, FormText, List, FormFeedback } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import './RegisterUser.css';
import APIURL from '../Helpers/environments';

type Props = {
    update: (newToken: string) => void,
    toggleWork: () => void
}

type State = {
    email: string,
    username: string,
    password: string,
    isAdmin: boolean,
    passMessage: string,
    isMounted: boolean
}

class RegisterUser extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            isAdmin: false,
            passMessage: '',
            isMounted: false
        }
    }

    componentDidMount = () => {
        this.setState({
            isMounted: true,
        });
    };

    handleSubmit = (event: any) => {
        console.log(this.state.email, this.state.username, this.state.password, this.state.isAdmin)
        event.preventDefault();
        fetch(`${APIURL}/userlogin/register`, {
            method: "POST",
            body: JSON.stringify({ user: { email: this.state.email, username: this.state.username, password: this.state.password, isAdmin: this.state.isAdmin } }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        }).then(
            (response) => response.json()
        ).then((data) => {
            if (typeof (data.sessionToken) !== 'string') {
                this.props.update(data.sessionToken);
                alert(`Email already registered.`)
            } else {
                this.props.update(data.sessionToken);
                window.location.href = '/'
                alert(`Username and Email has been registered!`)
            }
        })
    };

    passwordVerification = () => {
        console.log('valid password');
        return (
            this.state.password.length > 5 &&
            this.state.password.match(/[A-Z]/) !== null &&
            this.state.password.match(/[a-z]/) !== null &&
            this.state.password.match(/[0-9]/) !== null
        );
    }

    render() {
        return (
            <div id="loginUser">
                <h1>Register</h1>
                <Form onSubmit={e => { e.preventDefault(); this.handleSubmit(e) }}>
                    <FormGroup>
                        <Input type="text"
                            id="loginInput"
                            placeholder="Email"
                            onChange={(e) => this.setState({ email: e.target.value })}
                            value={this.state.email}
                            name="email" />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Input type="text"
                            id="loginInput"
                            placeholder="Username"
                            onChange={(e) => this.setState({ username: e.target.value })}
                            value={this.state.username}
                            name="username" />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Input type="password"
                            id="loginInput"
                            placeholder="Password"
                            onChange={(e) => this.setState({ password: e.target.value })}
                            value={this.state.password}
                            name="password" />
                    </FormGroup>
                    <Button id="navbtns" className="Register User" type="submit">Register User!</Button>
                    <FormText>
                        <List type="unstyled" id="passwordREQ">
                            <li>Password requirements:</li>
                            <li>At least 5 characters</li>
                            <li>A mixture of both uppercase and lowercase letters.</li>
                            <li>A mixture of letters and numbers</li>
                            <li>NO SPECIAL CHARACTERS ALLOWED</li>
                        </List>
                    </FormText>
                    <FormFeedback>
                        {" "}
                        {this.state.passMessage !== "" ? <p className="passMessage">{this.state.passMessage}</p> : ""}
                    </FormFeedback>
                </Form>
            </div>
        )
    }
}

export default RegisterUser;