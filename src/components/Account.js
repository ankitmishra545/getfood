import Address from "./Address";
import { IoLocationOutline } from "react-icons/io5";

const Account = () => {
  return (
    <div className="flex flex-col">
      <div className="border-2 p-8 mb-5 bg-white">
        <h2>Account</h2>
        <p>To place your order now, fill some basic details</p>
        <div className="flex flex-col">
          <input type="text" className="p-3 border-2 my-2" />
          <input type="email" className="p-3 border-2 my-2" />
        </div>
        <button className="text-white bg-green-600 w-full p-3 text-lg">Submit</button>
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
