import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <ul>
      <li>
        <NavLink to="/home/recipes">Recipes</NavLink>
      </li>
      <li>
        <NavLink to="/home/timer">Timer</NavLink>
      </li>
      <li>
        <NavLink to="/home/contact-me">Contact Me</NavLink>
      </li>
      <li>
        <NavLink to="/home/about-this-app">About this App</NavLink>
      </li>
      <li>
        <NavLink to="/">Logout</NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
