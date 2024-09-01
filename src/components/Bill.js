import { useState } from "react";
import DeliveryTip from "./DeliveryTip";
import VerticalSeparator from "./VerticalSeparator";

const Bill = ({ billAmount, lastMileTravel, deliveryFee, billDiscount, platformFee, charges }) => {
  const [deliveryTip, setDeliveryTip] = useState(0);

  const handleDeliveryTip = (value) => {
    setDeliveryTip(value);
  };
  const totalBill = +billAmount + +deliveryFee + +platformFee + +charges;
  return (
    <>
      <div className="bg-white p-3 my-3">
        <DeliveryTip onClick={handleDeliveryTip} />
      </div>

      <div className="bg-white p-3 text-xs font-bold text-[#686B78]">
        <h3 className="text-lg text-black">Bill Details</h3>
        <div className="flex justify-between">
          <p>Item Total</p>
          <p>{billAmount}</p>
        </div>
        <div className="flex justify-between">
          <p>Deleivery Fee | {lastMileTravel} KMs</p>
          <p>{deliveryFee}</p>
        </div>
        <div className="flex justify-between">
          <p>Extra discount for you</p>
          <p>{billDiscount}</p>
        </div>
        <VerticalSeparator />
        <div className="flex justify-between">
          <p>Delivery Tip</p>
          <p>{deliveryTip}</p>
        </div>
        <div className="flex justify-between">
          <p>Platform fee</p>
          <p>{platformFee}</p>
        </div>
        <div className="flex justify-between">
          <p>GST and Restaurant Charges</p>
          <p>{charges}</p>
        </div>
        <VerticalSeparator />
        <div className="flex justify-between mt-2">
          <p className="uppercase text-lg">to pay</p>
          <p className="text-lg">{totalBill}</p>
        </div>
      </div>
    </>
  );
};

export default Bill;
