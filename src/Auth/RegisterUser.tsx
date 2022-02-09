import React from 'react';
import { Form, FormGroup, Input, Button } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import './RegisterUser.css';

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

    handleSubmit = () => {
        let userError: number | string

        console.log(this.state.email, this.state.username, this.state.password, this.state.isAdmin)
        fetch(`https://bwb-redbadgemovie-server.herokuapp.com/createlogin/register`, {
            method: "POST",
            body: JSON.stringify({user:{email: this.state.email, username: this.state.username, password: this.state.password, isAdmin: this.state.isAdmin}}),
            headers: new Headers({
                "Content-Type" : "application/json",
            }),
        }).then((response) => {
            console.log(`fetch success ${response}`);
            userError = response.status;
            if (userError === 500) {
                this.setState({alert: "Failed to Register User"});
                console.log(this.state.alert);
            }
            return response.json();
        }).then((data) => {
            console.log(data);
            console.log(this.props.update);
            this.props.update(data.sessionToken);
        })
    };

    render() {
        return(
            <div className="registerUser">
                <h1>Register</h1>
                <Form onSubmit={e => {e.preventDefault(); this.handleSubmit()}}>
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