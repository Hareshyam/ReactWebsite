import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './image/logo.jpg';
const Menu = () => {
    return (
        <>
            <div className="container-fluid nav-bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <NavLink className="navbar-brand text-light" to="/">
                                <img src={logo} className="img-fluid logo" />
                                </NavLink>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNavDropdown">

                                    <ul className="navbar-nav mb-2 mb-lg-0">
                                        <li className="nav-item mx-3">
                                            <NavLink exact activeClassName="nav_link" className="nav-link text-light" aria-current="page" to="/">Home</NavLink>
                                        </li>
                                        <li className="nav-item mx-3">
                                            <NavLink exact activeClassName="nav_link" className="nav-link text-light" to="/service">Service</NavLink>
                                        </li>
                                        <li className="nav-item mx-3">
                                            <NavLink exact activeClassName="nav_link" className="nav-link text-light" to="/about">About</NavLink>
                                        </li>

                                        <li className="nav-item mx-3">
                                            <NavLink exact activeClassName="nav_link" className="nav-link text-light" to="/contact">Contact</NavLink>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Menu;