import Account from "./Account";
import Cart from "./Cart";
import { MdAccountBox } from "react-icons/md";
import UserAccount from "./checkout/UserAccount";

const CartContainer = () => {
  return (
    <div className="flex justify-center pt-10 bg-[#E9ECEE] w-full px-20">
      <div className="relative w-7/12">
        <MdAccountBox className="absolute left-[-40px] top-8" size="60px" />

        <UserAccount />
      </div>
      <div className="w-5/12">
        <Cart />
      </div>
    </div>
  );
};

export default CartContainer;
