import React from "react";
import CartWidget from "./CartWidget";
import { NavLink, Link } from "react-router-dom";

export default function NavBar(){
    return (
        <>
            <nav>
                <ul>
                    <NavLink className="link" to="/">Home</NavLink>
                    <NavLink className="link" to="/category/1">Acción</NavLink>
                    <NavLink className="link" to="/category/2">Aventura</NavLink>
                    <CartWidget/>
                </ul>
            </nav>
        </>
    );
}
