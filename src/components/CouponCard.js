import { useDispatch, useSelector } from "react-redux";
import VerticalSeparator from "./VerticalSeparator";
import { addCoupon, removeCoupon } from "../store/cartSlice";
import displayINRCurrency from "../utils/displayCurrency";

const CouponCard = ({ couponDetail }) => {
  const { code, discount, minOrderValue, discountType } = couponDetail;

  const dispatch = useDispatch();
  const { code: appliedCoupon } = useSelector((store) => store.cart.coupon);

  const isAppliedCouponCard = appliedCoupon === code;
  const handleApplyCoupon = () => {
    if (isAppliedCouponCard) {
      dispatch(removeCoupon());
    } else {
      dispatch(addCoupon(couponDetail));
    }
  };

  return (
    <div className="border-2 shadow-lg py-5 my-3 px-3 w-full">
      <div className="flex justify-between pb-3">
        <h3 className="bg-orange-500 text-white p-2 shadow-lg font-semibold text-center border-2 rounded-lg">{code}</h3>
        <button
          className=" hover:opacity-70 border-[1px] p-1 border-orange-500"
          onClick={handleApplyCoupon}
          style={{ color: isAppliedCouponCard ? "red" : "orange" }}
        >
          {isAppliedCouponCard ? "Remove" : "Apply"}
        </button>
      </div>
      <div className="text-green-600">
        Get <span className="font-bold underline ">{displayINRCurrency(discount)}</span> discount with this code
      </div>
      <VerticalSeparator />
      <div className="my-3">
        Use code <span className="font-bold underline">{code}</span> and get{" "}
        <span className="font-bold">{discountType}</span> off on orders above{" "}
        <span className="font-bold">{displayINRCurrency(minOrderValue === 0 ? 299 : minOrderValue)}</span>
      </div>
    </div>
  );
};

export default CouponCard;
