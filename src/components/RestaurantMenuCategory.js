import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useState } from "react";

const RestaurantMenuCategory = ({ menuData }) => {
  const { title, itemCards } = menuData.card.card;

  return (
    <div className="px-3 my-2 ">
      <div className="flex items-center justify-between p-2 bg-slate-100">
        <div className="font-bold ">
          {title} ({itemCards.length})
        </div>
        <div>
          <IoIosArrowDown />
        </div>
      </div>
      <div className="w-full">
        <ItemCard menu={itemCards} />
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
