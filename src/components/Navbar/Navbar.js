import React from "react";
// import { Link, useLocation } from "react-router-dom";
import {LinkContainer, Link, Nav, NavItem} from "react-router-bootstrap";

function Navbar() {
    return (
        <div className="container-fluid-main">
            <Navbar fluid collapseOnselect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">JT Turner</Link>
                    </Navbar.Brand>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer to="/">
                            <NavItem>About Me</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            



            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="../../pages/About/about.js">About Me</a>
                        <a class="nav-item nav-link" href="#">Contact Me</a>
                        <a class="nav-item nav-link" href="#">Portfolio</a>
                    </div>
                </div>
            </nav> */}


        </div>
    )
}

export default Navbar;