import React from "react";
import { Routes, Route, Link } from "react-router-dom";
export default class Navigation extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/" id="todolist">Ytodolist</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/features">Features <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/templates">Templates</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">For Teams</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-expanded="false">
                                Resources
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Pricing</a>
                        </li>

                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <Link href="#" className="nav-link" to="/login">Log in</Link>
                        <button className="btn btn-danger my-2 my-sm-0" type="submit" style={{color:"white"}}><Link to="/signup">Start for free</Link></button>
                    </form>
                </div>
            </nav>
        )
    }
}