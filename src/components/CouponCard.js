import { useDispatch } from "react-redux";
import VerticalSeparator from "./VerticalSeparator";
import { addCoupon, removeCoupon } from "../store/cartSlice";
import { useState } from "react";

const CouponCard = ({ couponDetail }) => {
  const { code, discount, minOrderValue, discountType } = couponDetail;

  const dispatch = useDispatch();
  const [isCouponApplied, setIsCouponApplied] = useState(false);

  const handleApplyCoupon = () => {
    if (isCouponApplied) {
      dispatch(removeCoupon());
    } else {
      dispatch(addCoupon(couponDetail));
    }
    setIsCouponApplied(!isCouponApplied);
  };

  console.log(isCouponApplied);

  return (
    <div className="border-2 shadow-lg py-5 my-3 mx-16 px-8">
      <div className="flex justify-between pb-3">
        <h3 className="bg-orange-500 text-white p-2 shadow-lg font-bold w-28 text-center text-lg border-2 rounded-lg">
          {code}
        </h3>
        <button
          className=" hover:opacity-70 font-extrabold text-xl"
          onClick={handleApplyCoupon}
          style={{ color: isCouponApplied ? "red" : "orange" }}
        >
          {isCouponApplied ? "Remove" : "Apply"}
        </button>
      </div>
      <div className="text-green-600">
        Get <span className="font-bold underline ">₹{discount}</span> discount with this code
      </div>
      <VerticalSeparator />
      <div className="my-3">
        Use code <span className="font-bold underline">{code}</span> and get{" "}
        <span className="font-bold">{discountType}</span> off on orders above{" "}
        <span className="font-bold">₹{minOrderValue === 0 ? 299 : minOrderValue}</span>
      </div>
    </div>
  );
};

export default CouponCard;
