import { useState } from "react";
import DeliveryTip from "./DeliveryTip";
import VerticalSeparator from "./VerticalSeparator";
import BillSection from "./BillSection";
import calculateBillInfo from "../utils/helper";
import Coupon from "./Coupon";
import { useSelector } from "react-redux";

const Bill = ({ billAmount, lastMileTravel, deliveryFee, discountInfo }) => {
  const [deliveryTip, setDeliveryTip] = useState(0);

  const { discount = 0 } = useSelector((store) => store.cart.coupon);
  const handleDeliveryTip = (value) => {
    setDeliveryTip(+value);
  };

  const { platformFee, tax, couponInfo } = calculateBillInfo(discountInfo, billAmount, lastMileTravel);
  // console.log(billAmount, deliveryFee, platformFee, tax, deliveryTip, discount);
  const totalBill = (billAmount + deliveryFee + platformFee + tax + deliveryTip - discount).toFixed(2);
  return (
    <>
      <Coupon couponInfo={couponInfo} />
      <DeliveryTip onClick={handleDeliveryTip} />
      <div className="bg-white p-3 text-xs font-bold text-[#686B78]">
        <h3 className="text-lg text-black">Bill Details</h3>
        <BillSection
          key="Item Total"
          billName="Item Total"
          billValue={billAmount}
          textColor="green"
          discount={discount}
        />
        <BillSection key="Deleivery Fee " billName={`Deleivery Fee |  ${lastMileTravel} KMs`} billValue={deliveryFee} />
        <BillSection
          key="Extra discount for you"
          billName="Extra discount for you"
          billValue={discount}
          textColor="green"
        />
        <VerticalSeparator />
        <BillSection key="Delivery Tip" billName="Delivery Tip" billValue={deliveryTip} />
        <BillSection key="Platform fee" billName="Platform fee" billValue={platformFee} />
        <BillSection key="GST and Restaurant Charges" billName="GST and Restaurant Charges" billValue={tax} />
        <VerticalSeparator />
        <div className="flex justify-between mt-2">
          <p className="uppercase text-lg">to pay</p>
          <p className="text-lg">{totalBill}</p>
        </div>
      </div>
      <div className="uppercase my-5 flex items-center justify-center bg-orange-500 h-14 rounded-lg text-white font-bold text-xl">
        Proceed to payment
      </div>
    </>
  );
};

export default Bill;
