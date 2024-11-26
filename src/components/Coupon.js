import { useState } from "react";
import CouponCard from "./CouponCard";
import { RiDiscountPercentLine } from "react-icons/ri";

const Coupon = ({ couponInfo }) => {
  const [isCouponOpened, setIsCouponOpened] = useState(false);

  const coupanMessage = isCouponOpened ? "Apply Coupon" : "Great deal you're missing out on!";
  return (
    <div className="bg-white p-5 w-full">
      <h2 className="font-bold text-lg flex gap-2 items-center">
        <RiDiscountPercentLine />
        {coupanMessage}
      </h2>
      {isCouponOpened ? (
        <>
          {couponInfo.map((coupon, i) => (
            <CouponCard key={i} couponDetail={coupon} />
          ))}
        </>
      ) : (
        <button
          className="border-2 border-dashed text-sm shadow-lg p-1 hover:opacity-80 "
          onClick={() => setIsCouponOpened(true)}
        >
          View Coupons
        </button>
      )}
    </div>
  );
};

export default Coupon;
