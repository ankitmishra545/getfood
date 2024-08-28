import { MEDIA_LINKS } from "../utils/constant";
import { MdStars } from "react-icons/md";
import { LuDot } from "react-icons/lu";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, locality, costForTwo, cloudinaryImageId, cuisines, sla } = resData?.info;
  return (
    <div className="w-[300px] mb-3 mx-2 p-3 h-[400px] hover:bg-gray-100 hover:p-1">
      <div>
        <img src={MEDIA_LINKS + cloudinaryImageId} className="rounded-xl w-full h-[200px] object-cover" />
      </div>
      <div className="mt-4 ml-4">
        <h4 className="font-bold text-lg">{name}</h4>
        <div className="rating-delivery-time flex">
          <div className="flex">
            <span>
              <MdStars color="green" size="1.5em" />
            </span>
            <span className="ml-1">{avgRating}</span>
          </div>
          <div className="font-semibold flex">
            <span>
              <LuDot size="1.5em" />
            </span>
            <span>{sla.slaString}</span>
          </div>
        </div>
        <h4 className="text-[#02060C99] font-medium">{costForTwo}</h4>
        <div className="truncate text-[#02060C99]  font-medium">{cuisines.join(",")}</div>
        <div className="text-[#02060C99]  font-medium">{locality}</div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const promotedText = props.resData.info.aggregatedDiscountInfoV3.header;
    return (
      <>
        {promotedText !== "ITEMS" && (
          <label className="bg-black text-white px-2 py-1 absolute text-lg font-bold">{promotedText}</label>
        )}
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
