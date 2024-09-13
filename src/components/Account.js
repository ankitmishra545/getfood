// import { IMAGE_LOGIN } from "../utils/constant.js";
import { useState } from "react";
import AccountAction from "./AccountAction";
import Address from "./Address";
import { IoLocationOutline } from "react-icons/io5";

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userInfo = {};

  if (isLoggedIn) {
    userInfo.name = localStorage.getItem("name");
    userInfo.email = localStorage.getItem("email");
    userInfo.phonenumber = localStorage.getItem("phonenumber");
  }
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center bg-white border-2 p-8 mb-5">
        <div className="flex">
          {!isLoggedIn && (
            <div>
              <h2 className="text-[#282c3f] font-bold text-lg">Account</h2>
              <p className="text-[#7e808c] text-sm">To place your order now, fill some basic details</p>
              <AccountAction setIsLoggedIn={setIsLoggedIn} />
            </div>
          )}
          {isLoggedIn && (
            <div>
              <h2 className="text-lg font-extrabold">Account Info</h2>
              <div className="pt-5">
                <h4 className="font-semibold">{userInfo.name}</h4>
                <p className="text-sm py-1 ">{userInfo.phonenumber}</p>
                <p className="text-xs text-[#7e808c]">{userInfo.email}</p>
              </div>
            </div>
          )}
        </div>
        <div>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
            alt="login-image"
          />
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-[-40px] top-8 border-2 bg-white p-2 shadow-xl">
          <IoLocationOutline size="30px" />
        </div>
        <Address />
      </div>
    </div>
  );
};

export default Account;
