import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div>
                <header>
                    <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
                        <Container>
                            <NavbarBrand tag={Link} to="/">Building Management Dashboard</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                            <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                                <ul className="navbar-nav flex-grow">
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/">Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink tag={Link} className="text-dark" to="/counter">Contact</NavLink>
                                    </NavItem>
                                    
                                </ul>
                            </Collapse>
                        </Container>
                    </Navbar>
                </header>
                <div className="menudiv">
                    <div class="container">
                        <div class="sidenav">
                            <div>
                                <a href="#about">
                                    <NavLink className="homelink" tag={Link} to="/">Home</NavLink>
                                    
                                </a>
                                <a href="#test"><div>Building</div></a>

                                <a className="floorlink" href="#services">
                                    
                                    <div>Floor 1</div>
                                    <NavLink tag={Link} to="/floor1room1">Room 1</NavLink>
                                    <NavLink tag={Link} to="/floor1room2">Room 2</NavLink>
                                </a>

                                <a className="floorlink" href="#services">
                                    <div>Floor 2</div>
                                    <NavLink tag={Link} to="/floor2room1">Room 1</NavLink>
                                    <NavLink tag={Link} to="/floor2room2">Room 2</NavLink>
                                </a>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        );
    }

}

