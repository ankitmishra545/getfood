import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { MEDIA_LINKS } from "../utils/constant.js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cart = useSelector((store) => store.cart);

  const { cartItems, restaurant } = cart;
  const { name, city, cloudinaryImageId, sla } = restaurant;

  const set = new Set();

  cartItems.forEach((element) => {
    set.add(JSON.stringify(element));
  });

  const uniqueItemList = [];
  set.forEach((element) => {
    uniqueItemList.push(JSON.parse(element));
  });

  if (uniqueItemList.length === 0) {
    navigate("/");
  }

  return (
    <div className="mt-10 mx-20 border border-spacing-1 min-h-screen py-5 px-10 bg-red-100">
      {uniqueItemList.length > 0 && (
        <div className="flex mb-5">
          <img src={MEDIA_LINKS + cloudinaryImageId} className="h-16 w-16 object-cover" />
          <div className="pt-1 ps-3">
            <h3 className="font-bold text-[#282C3F]">{name}</h3>
            <p className="text-[#686B78] text-sm">{city}</p>
            <p className="text-[#686B78] text-xs">{sla?.minDeliveryTime + "-" + sla?.maxDeliveryTime} Mins</p>
          </div>
        </div>
      )}
      {uniqueItemList.map((item, index) => (
        <CartItem key={item.id + index} itemInfo={item} />
      ))}
    </div>
  );
};

export default Cart;
