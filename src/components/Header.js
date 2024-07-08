import { useState } from "react";
import { HEADER_LOGO } from "../utils/constant";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    return (
        <div className='header'>
            <div>
                <img src={HEADER_LOGO}/>
            </div>
            <ul className='nav-items'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li>Cart</li>
                <li>
                    <button onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
                </li>
            </ul>
        </div>
    )
};

export default Header;