import { MEDIA_LINKS } from "../utils/constant";
import { IoStar } from "react-icons/io5";

const ItemCard = ({ menu }) => {
  return (
    <div className="">
      {menu.map((menuItem) => {
        const { id, name, price, defaultPrice, description, imageId, ratings } =
          menuItem?.card?.info;
        const { rating = 0, ratingCountV2 = 0 } = ratings?.aggregatedRating;
        return (
          <div className="px-3" key={id}>
            <div className="flex ">
              <div className="w-9/12 px-2 flex flex-col justify-center">
                <p className="font-semibold text-lg">{name}</p>
                <p className="font-semibold text-lg">
                  ₹ {price / 100 || defaultPrice / 100}
                </p>
                <p className="flex items-center my-2">
                  <IoStar color="green" />
                  <span className="text-green-800 font-semibold ml-1">
                    {rating}
                  </span>{" "}
                  ({ratingCountV2})
                </p>
                <p className="text-sm">{description}</p>
              </div>
              <div className="w-3/12 p-5 flex flex-col items-center">
                <img src={MEDIA_LINKS + imageId} className="w-full" />
                <button className="w-[100px] p-1 relative flex justify-center bg-slate-100 font-bold text-green-600 border shadow-xl bottom-9">
                  ADD
                </button>
              </div>
            </div>
            <p className="h-[1px] bg-gray-400"></p>
          </div>
        );
      })}
    </div>
  );
};

export default ItemCard;
