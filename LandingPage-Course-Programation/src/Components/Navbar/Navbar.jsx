import { useState } from "react";
import { LuLaptop } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import { CiCircleInfo } from "react-icons/ci";
import { GoHome } from "react-icons/go";
import img1 from "/assets/img/home.png";

import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header>
      <div className="logo">
        <h1>Logo</h1>
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-link">
            <img src={img1} alt="home-icon" className="icon" />
            <a href="#home">Home</a>
          </li>
          <li className="nav-link">
            <CiCircleInfo
              color="white"
              strokeWidth={1}
              size={36}
              className="icon"
            />
            <a href="#about">About</a>
          </li>
          <li className="nav-link">
            <LuLaptop color="white" size={36} className="icon" />
            <a href="#services">Services</a>
          </li>
          <li className="nav-link">
            <IoMdContact color="white" size={36} className="icon " />
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="btn-navbar">
        <a href="#">Buy now</a>
      </div>
    </header>
  );
}

export default Navbar;
