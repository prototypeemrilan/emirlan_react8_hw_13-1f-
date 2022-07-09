import React from 'react';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <ul className="container">
            <li>
                <NavLink to="/"> main page</NavLink>
            </li>
            <li>
                <NavLink to="/blogs"> blogs</NavLink>
            </li>
            <li>
                <NavLink to="/about"> about</NavLink>
            </li>
        </ul>
    );
}

export default Header;