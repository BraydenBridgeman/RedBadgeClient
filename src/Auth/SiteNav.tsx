import React from 'react';
import logo from "../Assets/movie-reel-logo.png";

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
                <Navbar className='navbar' expand='md'>
                    <Link to="/">
                        <NavbarBrand
                            className='brand'>
                            <img src={logo}
                                width="70"
                                height="50"
                                alt="Movie Reel Home Page Button" />
                            Movie Watchers
                        </NavbarBrand>
                    </Link>
                    <Nav className='ml-auto' navbar>
                        <NavItem id="navitem">
                            <Link to="/Search">
                                <Button onClick={this.setSearchOn} id="navbtns">Search</Button>
                            </Link>
                        </NavItem>
                        <Link to="/MyMovieList">
                            <NavItem id="navitem">
                                <Button id="navbtns" onClick={() => { this.listOn() }}>My Movie Lists</Button>
                            </NavItem>
                        </Link>
                        <Link to="/Register">
                            <NavItem id="navitem">
                                <Button id="navbtns" onClick={() => { this.loginOn() }}>Login / Register</Button>
                            </NavItem>
                            <br />
                            {this.props.sessionToken ?
                                <NavItem id="navitem">
                                    <Button id="navbtns" onClick={this.props.logout}>Logout</Button>
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