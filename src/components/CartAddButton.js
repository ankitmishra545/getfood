import { useDispatch } from "react-redux";
import { addItem, addRestaurant } from "../store/cartSlice";
import AddRemoveButton from "./AddRemoveButton";
import useCartItem from "../utils/useCartItem";
import RestaurantContext from "../utils/RestaurantContext.js";
import { useContext } from "react";

const CartAddButton = ({ itemInfo }) => {
  const { id } = itemInfo;
  const dispatch = useDispatch();

  const { restaurantInfo } = useContext(RestaurantContext);

  const itemsInCart = useCartItem();
  const numberOfItemsInCart = itemsInCart[id];

  const addItemToCart = (item) => {
    dispatch(addRestaurant(restaurantInfo));
    dispatch(addItem(item));
  };

  return (
    <div>
      <div className="w-[100px] p-1 relative flex justify-center bg-slate-100 font-bold text-green-600 border shadow-xl bottom-9">
        {numberOfItemsInCart ? (
          <AddRemoveButton itemInfo={itemInfo} id={id} totalItem={numberOfItemsInCart} />
        ) : (
          <button onClick={() => addItemToCart(itemInfo)}>ADD</button>
        )}
      </div>
    </div>
  );
};

export default CartAddButton;
