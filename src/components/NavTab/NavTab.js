import React from 'react';
import { Link } from 'react-router-dom';
import './NavTab.css';

function NavTab() {

return (
// Header tag that houses the navbar
<header>
    <nav className="navbar navbar-expand-lg navbar-light" id="navbarMainStyling">
        <div className="container">

            <Link className="navbar-brand" id="brandNameStyling" to='/'>Hustin Kava</Link>

            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarMenu">

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">

                        <Link
                        to='/contact'
                        className={Window.location.pathname === '/contact' ? 'nav-link active' : "nav-link"}>
                        Contact
                        </Link>

                    </li>
                    <li className="nav-item">

                        <Link
                        to='/portfolio'
                        className={Window.location.pathname === '/portfolio' ? 'nav-link active' : "nav-link"}>
                        Portfolio
                        </Link>

                    </li>
                    <li className="nav-item">

                        <Link
                        to="/"
                        className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                        About
                        </Link>

                    </li>
                </ul>
            </div>
        </div>
    </nav>
</header>
)
}

export default NavTab;