import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

function Nav() {

    const navStyle = {
        color: "white",
    };

    return (
        <nav>
            <h3>Logo</h3>
            <ol className="nav-links">
                <Link style={navStyle} to="/about">
                    <li>
                        About
                    </li>
                </Link>
                <Link style={navStyle} to="/shop">
                    <li>
                        Shop
                    </li>
                </Link>
            </ol>
        </nav>
    );
}

export default Nav;
