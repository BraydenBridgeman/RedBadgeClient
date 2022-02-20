import React from 'react';
import { Container, Row, Col } from 'reactstrap'

import RegisterUser from './RegisterUser';
import Login from './Login';
import './Auth.css';

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
            return <h1>This page is not viewable.</h1>
        }
        return (
            <div id="authBody">
                    <Row xs="1" sm="2" md="4">
                        <Col md="6">
                            <RegisterUser update={this.props.tokenUpdate} toggleWork={this.toggleWork} />
                        </Col>
                        <Col md="6">
                            <Login update={this.props.tokenUpdate} toggleWork={this.toggleWork} />
                        </Col>
                    </Row>
            </div>
        )
    }
}


export default Auth;