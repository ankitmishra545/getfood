import Cart from "../Cart";
import { MdAccountBox } from "react-icons/md";
import UserAccount from "./UserAccount";
import Address from "./Address";
import { IoLocationOutline } from "react-icons/io5";

const CartContainer = () => {
  return (
    <div className="flex justify-center pt-10 bg-[#E9ECEE] w-full px-20">
      <div className="w-7/12">
        <div className="relative ">
          <MdAccountBox className="absolute left-[-40px] top-8" size="60px" />
          <UserAccount />
        </div>
        <div className="relative">
          <div className="absolute left-[-40px] top-8 border-2 bg-black p-2 shadow-xl">
            <IoLocationOutline size="30px" color="white" />
          </div>
          <Address />
        </div>
      </div>
      <div className="w-5/12">
        <Cart />
      </div>
    </div>
  );
};

export default CartContainer;
