import { useDispatch, useSelector } from "react-redux";
import { MEDIA_LINKS } from "../utils/constant";
import { IoStar } from "react-icons/io5";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { addItem, removeItem } from "../store/cartSlice";

const ItemCard = ({ menu }) => {
  const dispatch = useDispatch();

  const itemsInCart = useSelector((store) => store.cart);

  const totalItems = itemsInCart.reduce((acc, curr) => {
    if (acc[curr.id]) {
      acc[curr.id] = ++acc[curr.id];
    } else {
      acc[curr.id] = 1;
    }
    return acc;
  }, {});

  const addItemToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeItemFromCart = (e, id) => {
    dispatch(removeItem(id));
  };

  return (
    <>
      {menu.map((menuItem) => {
        const { id, name, price, defaultPrice, description, imageId, ratings } = menuItem?.card?.info;
        const { rating = 0, ratingCountV2 = 0 } = ratings?.aggregatedRating;
        return (
          <div className="px-3" key={id}>
            <div className="flex ">
              <div className="w-9/12 px-2 flex flex-col justify-center">
                <p className="font-semibold text-lg">{name}</p>
                <p className="font-semibold text-lg">₹ {price / 100 || defaultPrice / 100}</p>
                <p className="flex items-center my-2">
                  <IoStar color="green" />
                  {ratingCountV2 == 0 ? (
                    <span className="font-semibold text-orange-500 text-sm font-sans ms-1"> No Ratings</span>
                  ) : (
                    <span>
                      <span className="text-green-800 font-semibold ml-1">{rating}</span> ({ratingCountV2})
                    </span>
                  )}
                </p>
                <p className="text-sm">{description}</p>
              </div>
              <div className="w-3/12 p-5 flex flex-col items-center">
                <img src={MEDIA_LINKS + imageId} className="w-full" />
                {totalItems[id] ? (
                  <div className="w-[100px] p-1 relative flex justify-center bg-slate-100 font-bold text-green-600 border shadow-xl bottom-9">
                    <button
                      className="w-[30px] flex justify-center items-center"
                      onClick={(e) => removeItemFromCart(e, id)}
                    >
                      <FaMinus />
                    </button>
                    <div className="w-[30px] flex justify-center ">{totalItems[id]}</div>
                    <button
                      className="w-[30px] flex justify-center items-center"
                      onClick={() => addItemToCart(menuItem?.card?.info)}
                    >
                      <FaPlus />
                    </button>
                  </div>
                ) : (
                  <button
                    className="w-[100px] p-1 relative flex justify-center bg-slate-100 font-bold text-green-600 border shadow-xl bottom-9"
                    onClick={() => addItemToCart(menuItem?.card?.info)}
                  >
                    ADD
                  </button>
                )}
              </div>
            </div>
            <p className="h-[1px] bg-gray-400" />
          </div>
        );
      })}
    </>
  );
};

export default ItemCard;
