import React, { useState } from "react";
import "./Navbar.css";

import soccer from "../../assets/soccer.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [menuOpen, setMenuopen] = useState(false);

  return (
    <nav>
      <img src={soccer} alt="logo" className="logo " />
      <div
        className="menu"
        onClick={() => {
          setMenuopen(!menuOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <Link to="/">
          <li>
            <a>Home</a>
          </li>
        </Link>
       
        <Link to="/About">
          <li>
            <a>About</a>
          </li>
        </Link>
        <Link to="/Achievement">
          <li>
            <a>Achievements</a>
          </li>
        </Link>
        <Link to="/gallery">
          <li>
            <a>Gallery</a>
          </li>
        </Link>
        <Link to="/Contact">
          <li>
            <a>Contact Me</a>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
