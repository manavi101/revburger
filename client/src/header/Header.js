import React, { useState } from 'react';
import logo from './logo128.png';
import './Header.css';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {  
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div className="Header">
        <header className="Header-header">
            <Navbar color="faded" light className="mr-auto">
                <img src={logo} width="80px" heigth="20px"></img>
                <NavbarBrand >Revburger</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-1" />
                <Collapse isOpen={!collapsed} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/link/">
                                Left Navigation Link
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
        </div>
    );
}

export default Header;
