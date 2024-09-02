import { useState } from "react";
import CouponCard from "./CouponCard";

const Coupon = ({ couponInfo }) => {
  const [openCoupon, setOpenCoupon] = useState(false);
  return (
    <div className="bg-white p-5">
      {openCoupon ? (
        <div className="text-xl font-bold mb-10">Apply Coupon</div>
      ) : (
        <div className="flex justify-between">
          <h2 className="font-bold text-xl flex items-center">Great deal you're missing out on!</h2>
          <button
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold border-4 border-orange-500 text-xl shadow-lg p-3 hover:opacity-80 "
            onClick={() => setOpenCoupon(true)}
          >
            View Coupons
          </button>
        </div>
      )}
      {openCoupon && (
        <div>
          {couponInfo.map((coupon, i) => (
            <CouponCard key={i} couponDetail={coupon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Coupon;
