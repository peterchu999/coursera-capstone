import * as React from "react";
import footerImage from "../../assets/img/restauranfood.jpg";
import className from "./style.module.css";

const Footer = () => {
  return (
    <footer className={className.footer}>
      <img src={footerImage} alt="food illustration.png" />
      <nav>
        <h4>Dormant Navigation</h4>
        <ul>
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
      <nav>
        <h4>Contact</h4>
        <ul>
          <li>
            <a href="/">address</a>
          </li>
          <li>
            <a href="/">phone</a>
          </li>
          <li>
            <a href="/">email</a>
          </li>
          <li>
            <a href="/">Whatsapp</a>
          </li>
        </ul>
      </nav>
      <nav>
        <h4>Social Media Links</h4>
        <ul>
          <li>
            <a href="/">Twitter</a>
          </li>
          <li>
            <a href="/">Instagram</a>
          </li>
          <li>
            <a href="/">Facebook</a>
          </li>
          <li>
            <a href="/">Tiktok</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
