import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import './RegisterUser.css';

const RegisterUser = (props: any) => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event: any) => {
        event.preventDefault();
        if (password.length >= 5) {
            fetch(`https://bwb-redbadgemovie-server.herokuapp.com/createlogin/register`, {
                method: "POST",
                body: JSON.stringify({user:{email: email, userName: userName, password: password}}),
                headers: new Headers ({
                    'Content-Type' : 'application/json'
                })
            }).then(
                (response) => response.json()
            ).then(
                (response) => response.json()
            ).then((data) => {
                if (typeof(data.sessionToken) !== 'string') {
                    alert ('Email or Username already registered.')
                } else {
                    props.updateToken(data.sessionToken, data.user.isAdmin);
                    window.location.href="/"
                }
            })
        } else {
            alert (`Password must be at least 5 characters (${password.length}).`)
        }
    }

    return(
        <div className="userRegister">
            <h1>Register Account</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email Address:</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} type="email" name="email" value={email} required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="userName">UserName:</Label>
                    <Input onChange={(e) => setUserName(e.target.value)} type="text" name="username" value={userName} required/>
                </FormGroup>
                <FormGroup>
                    <Label htmlFor="password">Password:</Label>
                    <Input onChange={(e) => setPassword(e.target.value)} type="password" name="password" value={password} required/>
                </FormGroup>
                <Button type="submit">Register Account!</Button>
            </Form>
            <div className="switchRegister">
                <h2>Already registered?</h2>
                <Button onClick={() => props.setSettingOne(!props.current)}>Login here!</Button>
            </div>
        </div>
    )
}

export default RegisterUser;