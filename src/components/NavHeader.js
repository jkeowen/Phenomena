import React from "react";
import { Link } from "react-router-dom";

const NavHeader = () => {
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <a href="#"
                    className="navbar-brand mb-0 h1">
                        <img
                        className="d-inline-block"
                        src='https://i.pinimg.com/564x/a3/04/b1/a304b17e8301f5dae2adf1d962875091.jpg'
                        alt="Ghost Through Wall Icon"
                        width={'50'}
                        height={'60'} />
                        Phenomena   
                    </a>
                    <button
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div 
                        className="collapse navbar-collapse mx-5"
                        id="navbarNav">
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item">
                                <a href="#" className="nav-link active">Home</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/yourreports" className="nav-link">Your Reports</Link>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">Post Report</a>
                            </li>
                        </ul>
                    </div>    
            </div>
        </nav>
    )
}

export default NavHeader;