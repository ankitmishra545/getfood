import { useEffect, useState } from "react";
import { RESTAURANT_API } from "../utils/constant";
import { useParams } from "react-router-dom";
import Shimmer from './Shimmer'

const RestaurantMenu = () => {

    const { resId } = useParams();
    const [resMenu, setResMenu] = useState(null);

    useEffect(() => {
        fetchRestaurantMenu();
    }, []);

    const fetchRestaurantMenu = async() => {
        const fetchingMenu = await fetch(RESTAURANT_API + resId);

        const json = await fetchingMenu.json();
        setResMenu(json.data);
    }

    if(resMenu === null) return <Shimmer/>; // if we use ternary operator for this then next destructering will throw error

    const { name, avgRatingString, totalRatingsString, costForTwoMessage, sla, cuisines  } = resMenu.cards[2].card.card.info;

    const {itemCards } = resMenu.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

    return (
        <div>
            <h1>{name}</h1>
            <h3>
                <div>{avgRatingString+" ("+ totalRatingsString+")"}</div>
                <p>{costForTwoMessage}</p>
            </h3>
            <p>{sla.lastMileTravelString}</p>
            <p>{sla.slaString}</p>
            <p>{cuisines.join(", ")}</p>

            <div>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - {"Rs." +item.card.info.defaultPrice/100}</li>)}
            </div>

        </div>
    )
};

export default RestaurantMenu;