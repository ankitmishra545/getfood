// import { IMAGE_LOGIN } from "../utils/constant.js";
import AccountAction from "./AccountAction";
import Address from "./Address";
import { IoLocationOutline } from "react-icons/io5";

const Account = () => {
  return (
    <div className="flex flex-col">
      <div className="border-2 p-8 mb-5 bg-white flex">
        <div>
          <h2 className="text-[#282c3f] font-bold text-lg">Account</h2>
          <p className="text-[#7e808c] text-sm">To place your order now, fill some basic details</p>
          <AccountAction />
        </div>

        {/* <div className="flex flex-col pt-4">
          <input type="text" className="p-3 border-2 my-2" />
          <input type="email" className="p-3 border-2 my-2" />
        </div>
        <button className="text-white bg-green-600 w-full p-3 text-lg">Submit</button> */}
      </div>
      <div>
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
          alt="login-image"
        />
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
