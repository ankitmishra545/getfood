import { useState } from "react";
import { HEADER_LOGO } from "../utils/constant";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import Account from "./Account.js";
import AccountModel from "./sign_in/AccountModel";

const Header = () => {
  const [webName, setWebName] = useState("Grocery");
  const [isModelOpen, setIsModelOpen] = useState(false);

  const numberOfItems = useSelector((store) => store.cart.cartItems.length);
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
        <li className="mx-3">
          <button onClick={() => setIsModelOpen(true)}>Sign In</button>
        </li>
        <li className="mx-3 relative cursor-pointer">
          <Link to={numberOfItems && "/cart"}>
            <IoFastFoodOutline size="2rem" color="#cc4137" />
            <span className="absolute bottom-3 left-8 font-bold text-orange-800 text-lg bg-yellow-200 px-1 rounded-full">
              {numberOfItems}
            </span>
          </Link>
        </li>
      </ul>
      {isModelOpen && (
        <div className="fixed min-h-screen min-w-full bg-gray-200 bg-opacity-60 top-0 right-0 z-50">
          <div className="fixed right-0 top-0 w-6/12 bg-white min-h-screen p-10">
            <AccountModel onClose={setIsModelOpen} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
