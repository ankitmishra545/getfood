import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import PersonalDetails from "./PersonalDetails.js";

const Checkout = () => {
  const numberOfItems = useSelector((store) => store.cart.cartItems.length);
  return <div>{numberOfItems === 0 ? <EmptyCart /> : <PersonalDetails />}</div>;
};

export default Checkout;
