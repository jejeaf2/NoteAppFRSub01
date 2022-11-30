import React from "react";
import { Link } from "react-router-dom";
import { BiHomeSmile, BiPlusCircle } from "react-icons/bi";

function Navigation() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">
            <BiHomeSmile />
          </Link>
        </li>
        <li>
          <Link to="/add">
            <BiPlusCircle />
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
