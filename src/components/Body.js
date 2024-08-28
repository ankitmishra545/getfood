import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constant";
import { Link } from "react-router-dom";
import useFetchData from "../utils/useFetchData";

const Body = () => {
  const fetchedData = useFetchData(SWIGGY_API);

  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    if (fetchedData !== null) {
      setRestaurantList(fetchedData?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
  }, [fetchedData]);

  return fetchedData === null ? (
    <Shimmer />
  ) : restaurantList.length === 0 ? (
    <h1>No such Restaurant found!</h1>
  ) : (
    <div className="w-full px-10 pt-5">
      <div className="flex my-5">
        <div className="mr-5">
          <input
            type="text"
            className="border p-1 mr-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="border bg-gray-400 p-1 text-gray-100 rounded-lg"
            onClick={() => {
              const filteredRestaurantList =
                fetchedData?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter((x) =>
                  x.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
              setRestaurantList(filteredRestaurantList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="border border-slate-500 p-1 rounded-2xl text-xs "
          onClick={() => {
            const filteredList = fetchedData?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants.filter(
              (x) => x.info.avgRating > 4.4
            );
            setRestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        {restaurantList.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
            {restaurant?.info?.aggregatedDiscountInfoV3?.header ? (
              <PromotedRestaurantCard resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
