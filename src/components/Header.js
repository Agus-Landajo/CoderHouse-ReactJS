import "./header.css";
import React from "react"
import {NavLink} from "react-router-dom";
import NavBar from "./NavBar";

function Header(){
    return (
        <>
            <header>
                <NavLink to="/">
                    <h1>Indies</h1>
                </NavLink>                
                <NavBar/>
            </header>
            
        </>

    )
}

export default Header;