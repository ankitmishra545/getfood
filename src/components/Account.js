// import { IMAGE_LOGIN } from "../utils/constant.js";
import { useState } from "react";
import AccountAction from "./AccountAction";
import Address from "./Address";
import { IoLocationOutline } from "react-icons/io5";
import { IMAGE_LOGIN } from "../utils/constant.js";

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
        <div>
          {!isLoggedIn && (
            <>
              <h2 className="text-[#282c3f] font-bold text-lg">Account</h2>
              <p className="text-[#7e808c] text-sm">To place your order now, fill some basic details</p>
              <AccountAction setIsLoggedIn={setIsLoggedIn} />
            </>
          )}
          {isLoggedIn && (
            <>
              <h2 className="text-lg font-extrabold">Account Info</h2>
              <div className="pt-5">
                <h4 className="font-semibold">{userInfo.name}</h4>
                <p className="text-sm py-1 ">{userInfo.phonenumber}</p>
                <p className="text-xs text-[#7e808c]">{userInfo.email}</p>
              </div>
            </>
          )}
        </div>
        <div>
          <img src={IMAGE_LOGIN} alt="login-image" />
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-[-40px] top-8 border-2 bg-white p-2 shadow-xl">
          <IoLocationOutline size="30px" />
        </div>
        {/* <Address /> */}
        <div className="bg-white p-8">
          <h2>Your Address</h2>
          <p>Kammareddy</p>
          <p>4/6</p>
          <p>Railway station</p>
          <p>Tag</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
