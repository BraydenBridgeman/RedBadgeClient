import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import './RegisterUser.css';
import APIURL from '../Helpers/environments';

type Props = {
    update: any
}

class RegisterUser extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            isAdmin: false,
        }
    }

    componentDidMount = () => {

    }

    handleSubmit = (event : any) => {
        console.log(this.state.email, this.state.username, this.state.password, this.state.isAdmin)
        event.preventDefault();
        fetch(`${APIURL}/createlogin/register`, { 
            method: "POST",
            body: JSON.stringify({user:{email: this.state.email, username: this.state.username, password: this.state.password, isAdmin: this.state.isAdmin}}),
            headers: new Headers({
                "Content-Type" : "application/json",
            }),
        }).then(
            (response) => response.json()
        ).then((data) => {
            if (typeof(data.sessionToken) !== 'string') {
                alert(`Email already registered.`)
            } else {
                this.props.update(data.sessionToken);
                window.location.href='/'
                alert(`Username and Email has been registered!`)
            }
        })
    };

    render() {
        return(
            <div className="registerUser">
                <h1>Register</h1>
                <Form onSubmit={e => {e.preventDefault(); this.handleSubmit(e)}}>
                    <FormGroup>
                        <Input type="text" 
                        placeholder="Email"
                        onChange={(e) => this.setState({email: e.target.value})}
                        value={this.state.email}
                        name="email" />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Input type="text" 
                        placeholder="Username"
                        onChange={(e) => this.setState({username: e.target.value})}
                        value={this.state.username}
                        name="username" />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Input type="password"
                        placeholder="Password"
                        onChange={(e) => this.setState({password: e.target.value})}
                        value={this.state.password}
                        name="password" />
                    </FormGroup>
                    <Button className="Register User" type="submit">Register User!</Button>
                </Form>
            </div>
        )
    }
}

export default RegisterUser;