import { FaCircle } from "react-icons/fa";
import { TiArrowSortedUp } from "react-icons/ti";
import AddRemoveButton from "./AddRemoveButton";
import { useDispatch } from "react-redux";
import { clearItem } from "../store/cartSlice.js";

const CartItem = ({ itemInfo, numberOfItemsInCart }) => {
  const dispatch = useDispatch();
  const { name, isVeg, id, price, defaultPrice } = itemInfo;

  const handleClearItem = () => {
    dispatch(clearItem(id));
  };

  return (
    <div className="w-full bg-yellow-100 mb-5 p-2 flex items-center justify-between text-[#282c3f] font-serif">
      <div className="flex items-center w-5/12">
        <div
          className={`w-[10px] h-[10px] flex items-center justify-center border-2 mr-2 ${
            isVeg ? "border-green-600" : "border-red-400"
          }`}
        >
          {isVeg ? <FaCircle color="green" size="5px" /> : <TiArrowSortedUp color="#b81212" size="10px" />}
        </div>
        <p className="text-xs">{name}</p>
      </div>
      <div className="w-1/12 p-1 flex justify-center bg-slate-100 font-bold text-green-600 border mx-2">
        <AddRemoveButton id={id} itemInfo={itemInfo} totalItem={numberOfItemsInCart} />
      </div>
      <div className="w-3/12 font-sans text-[#282c3f]">₹ {(numberOfItemsInCart * (price ?? defaultPrice)) / 100}</div>
      <button className="w-1/12 bg-gray-200 px-2 rounded-lg" onClick={handleClearItem}>
        Clear
      </button>
    </div>
  );
};

export default CartItem;
