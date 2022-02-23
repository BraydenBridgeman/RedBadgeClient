import * as React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';
import Button from '@mui/material/Button';


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
        if (this.state.password.length >= 6) {
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

        } else {
            alert(`Password must be at least 6 characters (${this.state.password.length}).`)
        }
    };

    render() {
        return (
            <div id="loginUser">
                <h1>Register</h1>
                <Form onSubmit={e => { e.preventDefault(); this.handleSubmit(e); }}>
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
                    <Button type="submit" id="navbtns" variant="contained">Register!</Button>
                </Form>
            </div>
        )
    }
}

export default RegisterUser;