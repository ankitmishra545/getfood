import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constant";
import { Link } from "react-router-dom";

const Body = () => {

  const [fetchedRestaurantList, setFetchedRestaurantList] = useState([]);
  const [restaurantList, setRestaurantList] = useState(fetchedRestaurantList);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurants();
  }, [])

  const fetchRestaurants = async() => {
    const fetchedRestaurants = await fetch(SWIGGY_API);

    const json = await fetchedRestaurants.json();

    setFetchedRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setRestaurantList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // return keyword required
 return fetchedRestaurantList.length === 0 ? <Shimmer/> : 
        restaurantList.length === 0 ? <h1>No such Restaurant found!</h1> :
 (
        <div className='body'>
          <div>
            <input type="text" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            <button onClick={() => {
              const filteredRestaurantList = fetchedRestaurantList.filter(x => x.info.name.toLowerCase().includes(searchText.toLowerCase()));
              setRestaurantList(filteredRestaurantList)
            }}>Search</button>
          <button className='top-rated' onClick={() => {
              const filteredList = fetchedRestaurantList.filter(x => x.info.avgRating > 4.4 );
              setRestaurantList(filteredList);
            }}>Top Rated Restaurants</button>
          </div>
            
            <div className='card-container'>
              {
                restaurantList.map(restaurant => <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>)
              }
            </div>
        </div>
    )
};

export default Body;