import React from "react";
// import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    return (
        <div className="container-fluid-main navbar">
            <nav className="navbar navbar-expand-lg" id="heading">
                <button className="navbar-toggler icon" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "><i className="fa fa-bars" aria-hidden="true"></i></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-fill w-100 align-items-start">
                        <li className="nav-item">
                            <a className="nav-link a_link " href="/about">About Me</a>
                        </li>
                        <li className="nav-item active">
                            <a className="a_link nav-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="a_link nav-link" href="/contact">Contact</a>
                        </li>

                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;