import React from 'react';

import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

import './SiteNav.css';

import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    logout: () => void,
    tokenUpdate: (newToken: string) => void,
    sessionToken: string,
    setSearchValue: (s: string) => void
}

type State = {
    isOpen: boolean,
    hasError: boolean,
    isLogin: boolean,
    listActive: boolean,
    searchOn: boolean
}

class SiteNav extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.setIsOpen = this.setIsOpen.bind(this);
        this.state = {
            isOpen: true,
            hasError: false,
            isLogin: false,
            listActive: false,
            searchOn: false
        };
    }

    static uiError(error: any) {
        return { hasError: true };
    }

    componentDidCatch(err: any, errInfo: any) {
        console.log(err, errInfo);
    }

    setIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    setSearchOn = () => {
        this.setState({
            searchOn: !this.state.searchOn
        });
    }

    componentDidMount = () => {

    }

    loginOn = () => {
        this.setState({
            isLogin: true
        })
    }

    loginOff = () => {
        this.setState({
            isLogin: false
        })
    }

    listOn = () => {
        this.setState({
            listActive: true
        })
    }

    listOff = () => {
        this.setState({
            listActive: false
        })
    }

    render() {
        if (this.state.hasError) {
            return <h1>This Page is not viewable.</h1>;
        }
        return (
            <div className='siteNav'>
                <Navbar bg='light' variant='light' className='navbar' expand='md'>
                    <Link to="/">
                        <NavbarBrand className='brand'>Red Badge Project</NavbarBrand>
                    </Link>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <Link to="/Search">
                                <Button onClick={this.setSearchOn} className="searchButton">Search</Button>
                            </Link>
                        </NavItem>
                        <Link to="/MyMovieList">
                            <NavItem>
                                <Button className="myMovieListButton" onClick={() => { this.listOn() }}>My Movie Lists</Button>
                            </NavItem>
                        </Link>
                        <Link to="/Register">
                            <NavItem>
                                <Button className="loginButton" onClick={() => { this.loginOn() }}>Login / Register</Button>
                            </NavItem>
                            {this.props.sessionToken ?
                                <NavItem>
                                    <Button className="logoutButton" onClick={this.props.logout}>Logout</Button>
                                </NavItem>
                                : null}
                        </Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}

export default SiteNav;