import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 py-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="navbar-logo" src="/Sansai Sushi Logo.svg" alt="Sansai Sushi" width="50" height="24" />
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" href="#">Home</a>
                        <a className="nav-link" href="#">Menu</a>
                        <a className="nav-link" href="#">Catering</a>
                        <a className="nav-link" href="#">Sourcing</a>
                        <a className="nav-link disabled" aria-disabled="true">References</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;