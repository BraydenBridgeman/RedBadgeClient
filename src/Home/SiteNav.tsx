import React from 'react';

import { Link, Outlet } from 'react-router-dom';

import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    Button
} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import './SiteNav.css';

interface SiteNavProps {
    auth: () => boolean,
    sessionToken: string | null,
    clearToken: () => void
};

interface SiteNavState {

}

class SiteNav extends React.Component <SiteNavProps, SiteNavState> {
    constructor(props: SiteNavProps) {
        super(props);
        this.state = {}
    }


    render() {
        return (
            <div>
                <Navbar bg='light' variant='light' className='navbar' expand="md">
                    <Container>
                        {this.props.sessionToken}
                        <NavbarBrand className='brand' href='/HomePage'>RedBadgeProject</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem><Link className='navitem' to='/Search'>Search</Link></NavItem>
                            <NavItem><Link className='navitem' to='/UserLists'>My Movie Lists</Link></NavItem>
                            <NavItem>
                            ?<Button className='signInButton' href='/SignIn'>
                                Sign In
                            </Button>
                            :<Button className='logoutButton' onClick={this.props.clearToken}>
                                Logout
                            </Button>
                            </NavItem>
                        </Nav>
                    </Container>
                </Navbar>

                <Outlet />
            </div>
        )
    }
}

export default SiteNav;