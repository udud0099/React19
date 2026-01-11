import { useContext } from "react";
import assets from "../assets/assets";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ foodItem, catogory }) => {
  const { cartItems, addTocart, removeFromCart } = useContext(StoreContext);
  return (
    <div>
      {catogory === "All" || catogory === foodItem.category ? (
        <div key={foodItem._id} className="border p-4 rounded-lg mb-4">
          <img src={foodItem.image} alt={foodItem.name} />
          <h3>{foodItem.name}</h3>
          <p>{foodItem.description}</p>
          <p>Price: ${foodItem.price}</p>
          <div className="cursor-pointer">
            {!cartItems[foodItem._id] ? (
              <img
                src={assets.add_icon_white}
                alt="{add_icon_white}"
                onClick={() => addTocart(foodItem._id)}
              />
            ) : cartItems[foodItem._id] > 0 ? (
              <div className="flex items-center gap-1">
                <img
                  src={assets.remove_icon_red}
                  alt="{remove_icon_red}"
                  onClick={() => removeFromCart(foodItem._id)}
                />
                <span className="mx-2">{cartItems[foodItem._id]}</span>
                <img
                  src={assets.add_icon_green}
                  alt="{add_icon_green}"
                  onClick={() => addTocart(foodItem._id)}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FoodItem;
