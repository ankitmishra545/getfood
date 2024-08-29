import { MEDIA_LINKS } from "../utils/constant";
import { IoStar } from "react-icons/io5";
import CartAddButton from "./CartAddButton";

const ItemCard = ({ menu }) => {
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
                <CartAddButton itemInfo={menuItem?.card?.info} />
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
