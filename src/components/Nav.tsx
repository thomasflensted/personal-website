import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav-items">
        <li className="nav-item">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <h1 className="nav-item-content nav-title">Thomas Flensted</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
