import NavBar from "./NavBar";
import "./header.css";
import {NavLink} from "react-router-dom";
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