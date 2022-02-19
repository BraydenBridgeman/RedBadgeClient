import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import APIURL from '../Helpers/environments';

type Props = {
    update: (newToken: string) => void,
    toggleWork: () => void
}

type State = {
    email: string,
    username: string,
    password: string,
    sessionToken: any
}

class Login extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            email: "",
            username: "",
            password: "",
            sessionToken: ""
        }
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`${APIURL}/userlogin/login`, {
            method: "POST",
            body: JSON.stringify({ user: { email: this.state.email, username: this.state.username, password: this.state.password } }),
            headers: new Headers({
                "Content-Type": "application/json"
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            if (typeof (data.sessionToken) !== 'string') {
                alert(`Invalid username or password`)
            } else {
                this.props.update(data.sessionToken);
                window.location.href = '/';
                alert(`You are logged in!`)
            }
        })
    }

    render() {
        return (
            <div className='loginUser'>
                <h1>Login</h1>
                <Form onSubmit={e => { e.preventDefault(); this.handleSubmit(e) }}>
                    <FormGroup>
                        <Input
                            type="text"
                            placeholder="Email"
                            onChange={(e) => this.setState({ email: e.target.value })}
                            value={this.state.email} />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Input
                            type="text"
                            placeholder="Username"
                            onChange={(e) => this.setState({ username: e.target.value })}
                            value={this.state.username} />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Input
                            type="password"
                            placeholder="Password"
                            onChange={(e) => this.setState({ password: e.target.value })}
                            value={this.state.password} />
                    </FormGroup>
                    <Button className="loginButton" type="submit">Login!</Button>
                </Form>
            </div>
        )
    }
}

export default Login;