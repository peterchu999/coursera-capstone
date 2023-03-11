import * as React from "react";
import logo from "../../assets/img/Logo.svg";
import cssModule from "./style.module.css";
const Nav = () => {
  return (
    <nav className={cssModule.navigation}>
      <img src={logo} alt="logo.svg" className={cssModule.logo} />
      <ul className={cssModule.listContainer}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Menu</a>
        </li>
        <li>
          <a href="/">Reservation</a>
        </li>
        <li>
          <a href="/">Order Online</a>
        </li>
        <li>
          <a href="/">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
