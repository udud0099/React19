import { useState } from "react";
import assets from "../assets/assets";

const FoodItem = ({ foodItem, catogory }) => {
  const [itemCount, setItemCount] = useState(0);
  return (
    <div>
      {catogory === "All" || catogory === foodItem.category ? (
        <div key={foodItem._id} className="border p-4 rounded-lg mb-4">
          <img src={foodItem.image} alt={foodItem.name} />
          <h3>{foodItem.name}</h3>
          <p>{foodItem.description}</p>
          <p>Price: ${foodItem.price}</p>
          <div className="cursor-pointer">
            {itemCount === 0 ? (
              <img
                src={assets.add_icon_white}
                alt="{add_icon_white}"
                onClick={() => setItemCount(itemCount + 1)}
              />
            ) : itemCount > 0 ? (
              <div className="flex items-center gap-1">
                <img
                src={assets.remove_icon_red}
                alt="{remove_icon_red}"
                onClick={() => setItemCount(itemCount - 1)}
              />
                <span className="mx-2">{itemCount}</span>
                <img
                src={assets.add_icon_green}
                alt="{add_icon_green}"
                onClick={() => setItemCount(itemCount + 1)}
              />
              </div>
            ):""}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FoodItem;
