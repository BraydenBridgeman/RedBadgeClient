import React from 'react';
import { Container, Row, Col } from 'reactstrap'

import RegisterUser from './RegisterUser';
import Login from './Login';

import 'bootstrap/dist/css/bootstrap.min.css';

type Props = {
    tokenUpdate: (newToken: string) => void,
}

type State = {
    userError: boolean,
    toggle: boolean
}

class Auth extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            userError: false,
            toggle: false
        };
    }

    static getDerivedStateFromError(error: any) {
        return { userError: true }
    }

    componentDidCatch(error: any, errorInfo: any) {
        console.log(error, errorInfo);
    }

    toggleWork = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        if (this.state.userError) {
            return <h1>This page is not viewable.</h1>;
        }
        return (
            <Container className="authContainer">
                <Row>
                    <Col md="6">
                        {this.state.toggle ?
                            <RegisterUser update={this.props.tokenUpdate} toggleWork={this.toggleWork} /> :
                            <Login update={this.props.tokenUpdate} toggleWork={this.toggleWork} />}
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Auth;