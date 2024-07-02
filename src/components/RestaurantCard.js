import { MEDIA_LINKS } from "../utils/constant";

const RestaurantCard = ({resData}) => {
    const {name, avgRating, locality, costForTwo, cloudinaryImageId, cuisines, sla} = resData?.info; 
    return (
        <div className='restaurant-card'>
            <img src={MEDIA_LINKS+cloudinaryImageId}/>
            <h4>{name}</h4>
            <h4 className='rating-delivery-time'>
                <span>Rating: {avgRating}</span>
                <span>{sla.slaString}</span>
            </h4>
            <h4>{costForTwo}</h4>
            <div>{cuisines.join(",")}</div>
            <div>{locality}</div>
        </div>
    )
};

export default RestaurantCard;