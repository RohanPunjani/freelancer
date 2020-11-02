import React, {useState} from 'react'
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    if(sessionStorage.getItem('token') && isLoggedIn===false){
        setIsLoggedIn(true);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
            <div className="container">
                <Link className="navbar-brand" to="/">Freelancing India</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-toggle" aria-controls="navbar-toggle" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar-toggle">
                    <div className="mr-auto" />
                    <ul className="navbar-nav my-2 my-lg-0">
                        <NavLink exact className="nav-item nav-link" activeClassName="active" to="/">
                            Home
                        </NavLink>
                        <NavLink exact to="/about" className="nav-item nav-link">
                            About Us
                        </NavLink>
                        <NavLink exact to="/contact" className="nav-item nav-link">
                            Contact
                        </NavLink>
                        {isLoggedIn ? <div className="nav-item nav-link active">{sessionStorage.getItem('userName')}</div>
                        :
                        <NavLink exact to="/login" className="nav-item nav-link">
                            Login
                        </NavLink> }
                        {isLoggedIn ? null : 
                        <NavLink exact to="/signUp" className="nav-item nav-link">
                            Sign Up
                        </NavLink>}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
