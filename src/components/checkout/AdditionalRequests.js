import { useRef, useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const NO_CONTACT_DELIVERY_MESSAGE =
  "Our delivery partner will call to confirm. Please ensure that your address has all the required details.";

const CONTACT_DELIVERY_MESSAGE =
  "Unwell, or avoiding contact? Please select no contact delivery. Partner will safely place the order outside your door order (not for COD)";

const AdditionalRequests = () => {
  const [isNoContactDelivery, setIsNoContactDelivery] = useState(false);

  const contactDeliveryMessage = isNoContactDelivery ? NO_CONTACT_DELIVERY_MESSAGE : CONTACT_DELIVERY_MESSAGE;

  const handleSelectingNoContact = (e) => {
    setIsNoContactDelivery(!isNoContactDelivery);
    e.stopPropagation();
  };
  return (
    <>
      <div className="h-12 bg-gray-50 flex items-center px-3">
        <span>
          <RiDoubleQuotesL />
        </span>
        <input
          type="text"
          placeholder="Any suggestions? We will pass it on..."
          className="bg-transparent text-gray-700 w-full p-3 text-sm focus:outline-none placeholder:text-sm"
        />
      </div>
      <div
        className="border-[1px] border-gray-400 flex gap-3 items-start p-2 mt-3 cursor-pointer hover:shadow-xl"
        onClick={handleSelectingNoContact}
      >
        <input
          type="checkbox"
          className="mt-2 cursor-pointer"
          checked={isNoContactDelivery}
          onChange={handleSelectingNoContact}
        />
        <div className="text-sm">
          <h3 className="font-semibold">Opt in for No-contact delivery</h3>
          <p className="text-gray-600">{contactDeliveryMessage}</p>
        </div>
      </div>
    </>
  );
};

export default AdditionalRequests;
