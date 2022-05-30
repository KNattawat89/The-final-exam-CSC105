import React, { Component } from "react";
import { Navbar, NavbarBrand, NavItem, Nav, NavLink, Collapse, NavbarToggler } from "reactstrap";
import { Link } from 'react-router-dom'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light">
                    <div className="container d-flex justify-content-between">
                        {/* <NavbarToggler onClick={this.toggleNav} /> */}
                        <NavbarBrand href="/">For me</NavbarBrand>
                        <Nav>
                            <NavItem>
                                <NavLink href="#">
                                    <Link to="/home">
                                        Home
                                    </Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                <Link to="/aboutme">
                                       About Me
                                    </Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                <Link to="/photoGallery">
                                      PhotoGallery
                                </Link>
                                </NavLink>
                            </NavItem>
                        </Nav>

                        {/* </Collapse> */}

                    </div>
                </Navbar>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1 class="display-5 fw-bold">For me</h1>
                                <p class="col-md-8 fs-4">This website created for doing the final exam. And the content of this website are the history and private information.
                                    And the lastone, I want to pass this class,please!</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default HeaderComponent;