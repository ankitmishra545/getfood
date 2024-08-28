import { useState } from "react";
import { HEADER_LOGO } from "../utils/constant";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [webName, setWebName] = useState("Grocery");

  return (
    <div className="w-full flex justify-between px-10 bg-pink-200">
      <div className="w-1/12">
        <img src={HEADER_LOGO} className="rounded-full" />
      </div>
      <ul className="flex items-center font-bold">
        <li className="mr-5 text-cyan-600">
          Switch to{" "}
          <Link
            to={webName === "Food" ? "/" : "/grocery"}
            onClick={() => (webName === "Food" ? setWebName("Grocery") : setWebName("Food"))}
          >
            {webName}
          </Link>
        </li>
        <li className="mx-3">
          <Link to="/">Home</Link>
        </li>
        <li className="mx-3">
          <Link to="/about">About Us</Link>
        </li>
        <li className="mx-3">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="mx-3 relative">
          <IoFastFoodOutline size="2rem" color="#cc4137" fi />
          <span className="absolute bottom-3 left-8 font-bold text-orange-800 text-lg bg-yellow-200 px-1 rounded-full">
            3
          </span>
        </li>
        <li className="mx-3">
          <button onClick={() => (btnName === "Login" ? setBtnName("Logout") : setBtnName("Login"))}>{btnName}</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
