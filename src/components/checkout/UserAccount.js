import { useState } from "react";
import AccountAction from "../AccountAction";
import { IMAGE_LOGIN } from "../../utils/constant";

const UserAccount = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="flex justify-between items-center bg-white border-2 p-8 mb-5">
      <div>
        {isLoggedIn ? (
          <>
            <h2 className="text-lg font-extrabold">Account Info</h2>
            <div className="pt-5">
              <h4 className="font-semibold">{localStorage.getItem("name")}</h4>
              <p className="text-sm py-1 ">{localStorage.getItem("email")}</p>
              <p className="text-xs text-[#7e808c]">{localStorage.getItem("phonenumber")}</p>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-[#282c3f] font-bold text-lg">Account</h2>
            <p className="text-[#7e808c] text-sm">To place your order now, fill some basic details</p>
            <AccountAction setIsLoggedIn={setIsLoggedIn} />
          </>
        )}
      </div>
      <div>
        <img src={IMAGE_LOGIN} alt="login-image" />
      </div>
    </div>
  );
};

export default UserAccount;
