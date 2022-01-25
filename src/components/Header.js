import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import logo from "../imagenes/logo.png";
import "./header.css";

function Header() {
  return (
    
      <header>
        <Link to="/">
          <img className="logo_img" src={logo} alt="Logo" />
        </Link>
        <NavBar />
      </header>
    
  );
}

export default Header;
