import { Link } from "react-router-dom";
import { EMPTY_CART_IMAGE } from "../../utils/constant";

const EmptyCart = () => {
  return (
    <div className="p-5 pt-10 flex flex-col items-center justify-center ">
      <img src={EMPTY_CART_IMAGE} alt="empty-cart-image" className="max-h-80" />
      <h2 className="font-bold text-2xl pt-5">Your cart is empty</h2>
      <p className="text-sm py-1">You can go home page to view more restaurants</p>
      <Link to="/" className="uppercase text-white bg-[#f5721b] mt-5 p-3 font-bold">
        see restaurants near you
      </Link>
    </div>
  );
};

export default EmptyCart;
