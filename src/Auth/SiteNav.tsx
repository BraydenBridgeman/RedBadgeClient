import React from 'react';

import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';

import Search from '../Components/Search';

import './SiteNav.css';

import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    logout: any,
    tokenUpdate: any,
    sessionToken: string,
    setSearchValue: (s : string) => void
}

class SiteNav extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props)
        this.setIsOpen = this.setIsOpen.bind(this);
        this.state = {
            isOpen: false,
            searchOn: false
        };
    }

    setIsOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount = () => {
    }

    setSearchOn = () => {
        this.setState({
            searchOn: !this.state.searchOn
        });
    }

    render() {
        return(
            <div className='siteNav'>
                <Navbar bg='light' variant='light' className='navbar' expand='md'>
                    <NavbarBrand className='brand'>RedBadgeProject</NavbarBrand>
                        <Nav className='ml-auto' navbar>
                            <Search setSearchValue={this.props.setSearchValue} />
                            <NavItem>
                                <Button onClick={this.setSearchOn} className="searchButton">Search</Button>
                            </NavItem>
                            <NavItem>
                                <Button className="myMovieListsButton">My Movie Lists</Button>
                            </NavItem>
                            <NavItem>
                                <Button className="loginButton">Login / Register</Button>
                            </NavItem>
                            {this.props.sessionToken ? 
                            <NavItem>
                                <Button className="logoutButton" onClick={this.props.logout}>Logout</Button>
                            </NavItem>
                            : null}
                        </Nav>
                </Navbar>
            </div>
        )
    }
}

export default SiteNav;