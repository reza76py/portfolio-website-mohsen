import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css"; // Add styles if needed

const NavBar = () => {
    return (
        <nav className="navbar">
            <h2 className="nav-title">My Music App</h2>
            <ul className="nav-links">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
