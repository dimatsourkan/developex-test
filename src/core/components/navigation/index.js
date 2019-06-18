import React from "react";
import {NavLink} from "react-router-dom";

export class Navigation extends React.Component {
    render() {

        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink  className="nav-link" exact to="/" activeClassName="active">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/post" activeClassName="active">
                                Posts
                            </NavLink>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search posts..." />
                        <button className="btn btn-outline-info my-2 my-sm-0" type="button">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}