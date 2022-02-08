import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';

const Login = (props: any) => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`https://bwb-redbadgemovie-server.herokuapp.com/login/login`, {
            method: 'POST',
            body: JSON.stringify({user:{email: email, userName: userName, password: password}}),
            headers: new Headers ({
                'Content-Type' : 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            if (typeof(data.sessionToken) !== 'string') {
                alert (`Email or Username already registered.`)
            } else {
                props.updateToken(data.sessionToken, data.user.isAdmin);
                window.location.href='/';
            }
        })
    }

    return(
        <div className="userLogin">
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email Address:</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Username:</Label>
                    <Input onChange={(e) => setUserName(e.target.value)} type="text" name="userName" value={userName} required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password} required/>
                </FormGroup>
                <Button type="submit">Login!</Button>
            </Form>
            <div className="switchRegister">
                <h2>Need to create an account?</h2>
                <Button onClick={() => props.setSettingOne(!props.current)}>Register New User</Button>
            </div>
        </div>
    )
}

export default Login;