import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem.js";
import { MEDIA_LINKS } from "../../utils/constant.js";
import { useNavigate } from "react-router-dom";
import Bill from "../Bill.js";
import { useEffect } from "react";
import useCartItem from "../../utils/useCartItem.js";
import { clearCart } from "../../store/cartSlice.js";
import ProceedButton from "../ProceedButton";
import { RiDeleteBin6Line } from "react-icons/ri";
import AdditionalRequests from "./AdditionalRequests.js";

const CartDetails = () => {
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
    <div className=" mx-20 border border-spacing-1 h-screen py-5 bg-white">
      {uniqueItemList.length > 0 && (
        <div className="flex justify-between px-5">
          <div className="flex mb-5 cursor-pointer" onClick={() => navigate("/restaurant/" + restaurant.id)}>
            <img src={MEDIA_LINKS + cloudinaryImageId} className="h-16 w-16 object-cover" />
            <div className="pt-1 ps-3">
              <h3 className="font-bold text-[#282C3F]">{name}</h3>
              <p className="text-[#686B78] text-sm">{city}</p>

              <p className="text-[#686B78] text-xs">{minDeliveryTime + "-" + maxDeliveryTime} Mins</p>
            </div>
          </div>
          <button className="px-2 rounded-lg h-10" onClick={handleClearCart}>
            <RiDeleteBin6Line color="red" />
          </button>
        </div>
      )}
      <div className="h-[400px] overflow-y-scroll">
        <div className=" px-5">
          {uniqueItemList.map((item, index) => {
            const { id } = item;
            return <CartItem key={id + index} itemInfo={item} numberOfItemsInCart={itemsCountObject[id]} />;
          })}

          <AdditionalRequests />
          <Bill
            billAmount={billAmount}
            lastMileTravel={lastMileTravel}
            deliveryFee={+(feeDetails.totalFee / 100)}
            discountInfo={discountInfo}
          />
        </div>
      </div>
      <div className="flex justify-between mt-2">
        <p className="uppercase text-lg">to pay</p>
        <p className="text-lg">1200</p>
      </div>
      <ProceedButton text="Proceed to payment" />
    </div>
  );
};

export default CartDetails;
