import { HEADER_LOGO } from "../utils/constant";

const Header = () => {
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
            </ul>
        </div>
    )
};

export default Header;