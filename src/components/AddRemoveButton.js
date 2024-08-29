import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../store/cartSlice";

const AddRemoveButton = ({ id, itemInfo, totalItem }) => {
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeItemFromCart = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <button className="w-[30px] flex justify-center items-center" onClick={() => removeItemFromCart(id)}>
        <FaMinus />
      </button>
      <div className="w-[30px] flex justify-center ">{totalItem}</div>
      <button className="w-[30px] flex justify-center items-center" onClick={() => addItemToCart(itemInfo)}>
        <FaPlus />
      </button>
    </>
  );
};

export default AddRemoveButton;
