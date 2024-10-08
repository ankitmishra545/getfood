import { useState } from "react";
import { HEADER_LOGO } from "../utils/constant";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

const Header = () => {
  const [webName, setWebName] = useState("Grocery");

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
        <li className="mx-3 relative cursor-pointer">
          <Link to={numberOfItems && "/cart"}>
            <IoFastFoodOutline size="2rem" color="#cc4137" />
            <span className="absolute bottom-3 left-8 font-bold text-orange-800 text-lg bg-yellow-200 px-1 rounded-full">
              {numberOfItems}
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
