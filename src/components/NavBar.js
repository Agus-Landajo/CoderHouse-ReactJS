import React from "react";
import CartWidget from "./CartWidget";

export default function NavBar(){
    return (
        <>
            <nav>
                <ul>
                    <li>Link 1</li>
                    <li>Link 2</li>
                    <li>Link 3</li>
                    <CartWidget/>
                </ul>
            </nav>
        </>
    );
}
