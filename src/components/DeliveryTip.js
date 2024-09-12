import { useState } from "react";

const DeliveryTip = ({ onClick }) => {
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const handleInput = (e) => {
    if (!e.target.value) {
      setIsOtherSelected(false);
    }
    onClick(e.target.value);
  };
  return (
    <div className="px-3 bg-white p-3 my-3">
      <h4 className="text-sm font-bold">Say thanks with a Tip</h4>
      <p className="text-sm text-[#686B78]">
        Day & night, our delivery partners bring your favourite meals. Thanks them with a tip
      </p>
      <div className="flex justify-between my-3">
        {[20, 30, 50].map((value, index) => {
          const isIndex = index == "1";
          const className =
            "text-center  w-20 p-2 border-2 border-gray-300 shadow-lg rounded-lg hover:opacity-60 cursor-pointer";
          return (
            <div key={value} className={isIndex ? className + " relative" : className} onClick={() => onClick(value)}>
              ₹ {value}
              {isIndex && (
                <div className="absolute right-[-2px] text-xs bg-orange-500 p-1 w-20 text-white">Most Tipped</div>
              )}
            </div>
          );
        })}
        <div className="relative ">
          {isOtherSelected && <div className="absolute flex items-center top-[6px] left-3 w-3 text-lg">₹ </div>}
          <input
            type="number"
            className="w-24 border-2 border-gray-300 p-2 rounded-lg placeholder-black ps-6 "
            onBlur={handleInput}
            onFocus={() => setIsOtherSelected(true)}
            placeholder={isOtherSelected ? "" : "Other"}
          />
        </div>
      </div>
    </div>
  );
};

export default DeliveryTip;
