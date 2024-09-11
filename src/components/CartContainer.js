import Account from "./Account";
import Cart from "./Cart";
import { MdAccountBox } from "react-icons/md";

const CartContainer = () => {
  return (
    <div className="flex justify-center pt-10 bg-[#E9ECEE]">
      <div className="relative">
        <MdAccountBox className="absolute left-[-40px] top-8" size="60px" />

        <Account />
      </div>
      <Cart />
    </div>
  );
};

export default CartContainer;
