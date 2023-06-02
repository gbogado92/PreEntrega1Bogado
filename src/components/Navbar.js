import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <h2 className="navbar-brand">GB Apple</h2>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to={""}>
                Store
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to={""}>
                Mac
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to={""}>
                Iphone
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="ms-auto">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
