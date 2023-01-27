import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact onClick={props.onClick}>
          ALL USERS
        </NavLink>
      </li>
      <li>
        <NavLink to="/u1/places" onClick={props.onClick}>MY PLACES</NavLink>
      </li>
      <li>
        <NavLink to="/places/new" onClick={props.onClick}>ADD PLACE</NavLink>
      </li>
      <li>
        <NavLink to="/auth" onClick={props.onClick}>AUTHENTICATE</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
