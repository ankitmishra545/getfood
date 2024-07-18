import { RESTAURANT_API } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useFetchData from "../utils/useFetchData";
import { MdStars } from "react-icons/md";
import { LuDot } from "react-icons/lu";
import { GiFlowerEmblem } from "react-icons/gi";
import RestaurantMenuCategory from "./RestaurantMenuCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const fetchedData = useFetchData(RESTAURANT_API + resId);

  if (fetchedData === null) return <Shimmer />;

  const {
    name,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    sla,
    cuisines,
  } = fetchedData.cards[2].card.card.info;

  // const { itemCards } =
  //   fetchedData.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  const ItemCategory =
    fetchedData.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (x) =>
        x.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="m-auto w-7/12 mt-10">
      <h1 className="text-2xl text-black font-bold">{name}</h1>
      <div className="border border-gray-300 rounded-3xl pl-6 py-5 my-5 shadow-[0_0_15px_0_rgb(0,0,0,0.3)]">
        <div className="flex font-bold">
          <span>
            <MdStars color="green" size="1.5em" />
          </span>
          <span className="ml-1">
            {avgRatingString + " (" + totalRatingsString + ")"}
          </span>
          <span>
            <LuDot color="gray" size="1.5em" />
          </span>
          <p>{costForTwoMessage}</p>
        </div>
        <div className="mt-2 flex text-lg">
          <p className="mr-5">{sla.lastMileTravelString}</p>
          <p>{sla.slaString}</p>
        </div>
        <p className="underline decoration-[#FF5200] text-[#FF5200] font-bold">
          {cuisines.join(", ")}
        </p>
      </div>
      <div className="flex justify-center h-20 my-3 items-center">
        <GiFlowerEmblem size=".6em" />
        <span className="mx-3 text-xl font-semibold tracking-[0.25em]">
          MENU
        </span>
        <GiFlowerEmblem size=".6em" />
      </div>

      <div>
        {ItemCategory.map((category) => {
          return (
            <RestaurantMenuCategory
              key={category.card.card.title}
              menuData={category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
