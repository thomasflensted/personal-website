import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

const Nav = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.classList = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="nav">
      <ul className="nav-items">
        <li className="nav-item">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <h1 className="nav-item-content nav-title">Thomas Flensted</h1>
          </Link>
        </li>
        <li className="nav-item">
          {theme === "dark" ? (
            <MdLightMode
              className="nav-item-content"
              onClick={() => setTheme("light")}
            />
          ) : (
            <MdDarkMode
              className="nav-item-content"
              onClick={() => setTheme("dark")}
            />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
