import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary w-100 py-2">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img className="navbar-logo" src="../public/Sansai Sushi Logo.svg" alt="Sansai Sushi" width="50" height="24" />
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
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/">Home</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/Menu">Menu</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/Catering">Catering</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/Sourcing">Sourcing</NavLink>
                        <NavLink className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} to="/Refrences">References</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;