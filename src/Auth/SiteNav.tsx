import React from 'react';

import { Navbar, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';

import './SiteNav.css';

import 'bootstrap/dist/css/bootstrap.min.css';

interface Props {
    logout: any,
    tokenUpdate: any
}

class SiteNav extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    componentDidMount = () => {

    }

    render() {
        return(
            <div className='siteNav'>
                <Navbar bg='light' variant='light' className='navbar' expand='md'>
                    <NavbarBrand className='brand'>RedBadgeProject</NavbarBrand>
                        <Nav className='ml-auto' navbar>
                            <NavItem>Search</NavItem>
                            <NavItem>My Movie Lists</NavItem>
                            <NavItem>
                                <Button onClick={this.props.logout}>Logout</Button>
                            </NavItem>
                        </Nav>
                </Navbar>
            </div>
        )
    }
}

export default SiteNav;