import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart);

  const uniqueItemList = [...new Set(cartItems)];

  console.log(uniqueItemList, cartItems);

  return (
    <div className="mt-10 mx-20 border border-spacing-1 min-h-screen py-5 px-10 bg-red-100">
      {uniqueItemList.map((item, index) => (
        <CartItem key={item.id + index} itemInfo={item} />
      ))}
    </div>
  );
};

export default Cart;
