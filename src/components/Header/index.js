import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/text_convert.png';

const Header = () => {
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <Link className="navbar-brand" to="/">
                    <img src={logo} width="50px" alt="logo"></img>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Text convert <span className="sr-only">(current)</span></a>
                    </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;