import { useState } from "react";
import { HEADER_LOGO } from "../utils/constant";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");
    return (
        <div className='header'>
            <div>
                <img src={HEADER_LOGO}/>
            </div>
            <ul className='nav-items'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <li>
                    <button onClick={() => btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")}>{btnName}</button>
                </li>
            </ul>
        </div>
    )
};

export default Header;