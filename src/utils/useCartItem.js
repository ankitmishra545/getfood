import { useSelector } from "react-redux";

const useCartItem = () => {
  const itemsInCart = useSelector((store) => store.cart.cartItems);

  const totalItems = itemsInCart.reduce(
    (acc, curr) => {
      if (acc[curr.id]) {
        acc[curr.id] = ++acc[curr.id];
      } else {
        acc[curr.id] = 1;
      }
      acc["price"] = acc["price"] + (curr.price ?? curr.defaultPrice);
      return acc;
    },
    { price: 0 }
  );

  return totalItems;
};

export default useCartItem;
