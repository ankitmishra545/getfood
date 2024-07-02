import RestaurantCard from "./RestaurantCard";
import resList from '../utils/mockData'
import { useState } from "react";

const Body = () => {

  const [restaurantList, setRestaurantList] = useState(resList);
    return (
        <div className='body'>
            <button className='top-rated' onClick={() => {
              const filteredList = resList.filter(x => x.info.avgRating > 4.4 );
              setRestaurantList(filteredList);
            }}>Top Rated Restaurants</button>
            <div className='card-container'>
              {
                restaurantList.map(restaurant => <RestaurantCard resData={restaurant} key={restaurant.info.id}/>)
              }
            </div>
        </div>
    )
};

export default Body;