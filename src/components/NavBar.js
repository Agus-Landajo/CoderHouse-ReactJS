import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <NavLink className="link" activeClassName="active" to="/">
            Tienda
          </NavLink>
          <NavLink
            className="link"
            activeClassName="active"
            to="/category/accion"
          >
            Acción
          </NavLink>
          <NavLink
            className="link"
            activeClassName="active"
            to="/category/aventura"
          >
            Aventura
          </NavLink>
          <NavLink
            className="link"
            activeClassName="active"
            to="/category/suspenso"
          >
            Suspenso
          </NavLink>
          <CartWidget />
        </ul>
      </nav>
    </>
  );
}
