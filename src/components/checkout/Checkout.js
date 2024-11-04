import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import CartContainer from "./CartContainer.js";

const Checkout = () => {
  const numberOfItems = useSelector((store) => store.cart.cartItems.length);
  return <div>{numberOfItems === 0 ? <EmptyCart /> : <CartContainer />}</div>;
};

export default Checkout;
