import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { MEDIA_LINKS } from "../utils/constant.js";
import { useNavigate } from "react-router-dom";
import Bill from "./Bill.js";
import { useEffect } from "react";
import useCartItem from "../utils/useCartItem.js";
import { clearCart } from "../store/cartSlice.js";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const itemsCountObject = useCartItem();

  const { cartItems, restaurant } = cart;
  const { name, city, cloudinaryImageId, sla, aggregatedDiscountInfo, feeDetails } = restaurant;
  const { lastMileTravel, minDeliveryTime, maxDeliveryTime } = sla;

  const discountInfo = aggregatedDiscountInfo.descriptionList.filter((discount) =>
    ["Flat", "Percentage"].includes(discount.discountType)
  );

  const billAmount = itemsCountObject["price"] / 100;

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const set = new Set();

  cartItems.forEach((element) => {
    set.add(JSON.stringify(element));
  });

  const uniqueItemList = [];
  set.forEach((element) => {
    uniqueItemList.push(JSON.parse(element));
  });

  useEffect(() => {
    if (uniqueItemList.length === 0) {
      navigate("/");
    }
  }, [uniqueItemList]);

  return (
    <div className="mt-10 mx-20 border border-spacing-1 min-h-screen py-5 px-10 bg-red-100">
      {uniqueItemList.length > 0 && (
        <div className="flex justify-between">
          <div className="flex mb-5 cursor-pointer" onClick={() => navigate("/restaurant/" + restaurant.id)}>
            <img src={MEDIA_LINKS + cloudinaryImageId} className="h-16 w-16 object-cover" />
            <div className="pt-1 ps-3">
              <h3 className="font-bold text-[#282C3F]">{name}</h3>
              <p className="text-[#686B78] text-sm">{city}</p>

              <p className="text-[#686B78] text-xs">{minDeliveryTime + "-" + maxDeliveryTime} Mins</p>
            </div>
          </div>
          <button className="bg-gray-200 px-2 rounded-lg h-10" onClick={handleClearCart}>
            Clear cart
          </button>
        </div>
      )}
      {uniqueItemList.map((item, index) => {
        const { id } = item;
        return <CartItem key={id + index} itemInfo={item} numberOfItemsInCart={itemsCountObject[id]} />;
      })}
      <Bill
        billAmount={billAmount}
        lastMileTravel={lastMileTravel}
        deliveryFee={+(feeDetails.totalFee / 100)}
        discountInfo={discountInfo}
      />
    </div>
  );
};

export default Cart;
