import { FaCircle } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";
import AddRemoveButton from "./AddRemoveButton";
import displayINRCurrency from "../utils/displayCurrency";

const CartItem = ({ itemInfo, numberOfItemsInCart }) => {
  const { name, isVeg, id, price, defaultPrice } = itemInfo;

  return (
    <div className="w-full mb-1 p-2 flex gap-2 items-center justify-between text-[#282c3f] font-serif">
      <div className="flex gap-2 items-center w-6/12">
        <div
          className={`w-2/12 max-w-[12px] h-[12px] flex items-center justify-center border-2 ${
            isVeg ? "border-green-600" : "border-red-400"
          }`}
        >
          {isVeg ? <FaCircle color="green" size="5px" /> : <TiArrowSortedUp color="#b81212" size="10px" />}
        </div>
        <p className="text-sm w-10/12 line-clamp-3">{name}</p>
      </div>
      <div className="w-3/12 p-1 flex justify-center bg-slate-100 font-bold text-green-600 border mx-2">
        <AddRemoveButton id={id} itemInfo={itemInfo} totalItem={numberOfItemsInCart} />
      </div>
      <div className="w-3/12 font-sans text-[#282c3f]">
        {" "}
        {displayINRCurrency((numberOfItemsInCart * (price ?? defaultPrice)) / 100)}
      </div>
    </div>
  );
};

export default CartItem;
