import { useDispatch } from "react-redux";
import { addItem } from "../store/cartSlice";
import AddRemoveButton from "./AddRemoveButton";

const CartAddButton = ({ itemInfo }) => {
  const dispatch = useDispatch();

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      <div className="w-[100px] p-1 relative flex justify-center bg-slate-100 font-bold text-green-600 border shadow-xl bottom-9">
        {<AddRemoveButton itemInfo={itemInfo} /> && <button onClick={() => addItemToCart(itemInfo)}>ADD</button>}
      </div>
    </div>
  );
};

export default CartAddButton;
