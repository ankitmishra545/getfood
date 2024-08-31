import { useSelector } from "react-redux";

const useCartItem = () => {
  const itemsInCart = useSelector((store) => store.cart.cartItems);

  const totalItems = itemsInCart.reduce((acc, curr) => {
    if (acc[curr.id]) {
      acc[curr.id] = ++acc[curr.id];
      acc["price"] = acc["price"] + curr.price;
    } else {
      acc[curr.id] = 1;
      acc["price"] = curr.price;
    }
    return acc;
  }, {});

  return totalItems;
};

export default useCartItem;
