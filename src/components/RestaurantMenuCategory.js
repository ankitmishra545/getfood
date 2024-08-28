import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ItemCard from "./ItemCard";

const RestaurantMenuCategory = ({ menuData, showItemsList, setShowItemsList, index }) => {
  const { title, itemCards } = menuData.card.card;

  const handleShowItemsList = () => {
    if (showItemsList) {
      setShowItemsList(null);
    } else {
      setShowItemsList(index);
    }
  };

  return (
    <div className="px-3 my-2 ">
      <div
        className="flex items-center justify-between p-2 bg-slate-100 cursor-pointer rounded-lg"
        onClick={handleShowItemsList}
      >
        <div className="font-bold ">
          {title} ({itemCards.length})
        </div>
        <div>{showItemsList ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
      </div>
      <div className="w-full">{showItemsList && <ItemCard menu={itemCards} />}</div>
    </div>
  );
};

export default RestaurantMenuCategory;
