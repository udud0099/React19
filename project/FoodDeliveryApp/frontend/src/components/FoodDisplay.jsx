import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

const FoodDisplay = ({ catogory }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div id="food-display">
      <div className="grid grid-cols-4 gap-2">
        {food_list.map((foodItem) => {
          return (
            <FoodItem
              key={foodItem._id}
              foodItem={foodItem}
              catogory={catogory}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
