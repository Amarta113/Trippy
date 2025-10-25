import React from "react"
import "./Navbar.css"
import {Link} from "react-router-dom";
import { Menuitems } from "./Menuitems";

export default function Navbar(){
    const [clicked, setClicked] = React.useState(false)

    function handleClick() {
        setClicked(!clicked);
    }

    return(
            <nav className="Navbar-items" >
                <h1 className="navbar-logo">Trippy</h1>
                <div className="menu-icons" onClick={handleClick}>
                    <i className={clicked? "fas fa-times":"fas fa-bars"}></i>
                </div>
                <ul className={clicked? "nav-menu active" : "nav-menu"}>
                    {Menuitems.map((item, index) => {
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                <i className={item.icon}></i>{item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <button className="signup">Sign Up</button>
            </nav>
        );
    }


