import React from 'react';
import { Container, Row, Col } from 'reactstrap'

import RegisterUser from './RegisterUser';
import Login from './Login';

import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
    tokenUpdate: any
}

type State = {
    userError: boolean
}

class Auth extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userError: false,
        };
    }

    render() {
        return (
            <Container className="authContainer">
                <Row>
                    <Col md="4">
                        <RegisterUser update = {this.props.tokenUpdate}/>
                    </Col>
                    <Col md="4">
                        <Login update = {this.props.tokenUpdate}/>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Auth;