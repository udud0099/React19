import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import assets from "../../assets/assets";

const Cart = () => {
  const { food_list, cartItems, addTocart, removeFromCart } =
    useContext(StoreContext);
  let total = 0;
  return (
    <div>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th>Item</th>
            <th>item Name</th>
            <th>Quantity</th>
            <th>price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(cartItems).map((itemId) => {
            const { _id, name, image, price } = food_list.find(
              (food) => food._id === itemId
            );
            total = total + price * cartItems[itemId];

            return (
              <tr key={itemId}>
                <td>
                  <img
                    src={image}
                    alt={name}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td>{name}</td>
                <td>
                  <div className="flex items-center gap-1">
                    <img
                      src={assets.remove_icon_red}
                      alt="{remove_icon_red}"
                      onClick={() => removeFromCart(itemId)}
                    />
                    <span className="mx-2">{cartItems[itemId]}</span>
                    <img
                      src={assets.add_icon_green}
                      alt="{add_icon_green}"
                      onClick={() => addTocart(itemId)}
                    />
                  </div>
                </td>
                <td>{price}</td>
                <td>{price * cartItems[itemId]}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <b>Total Amount: {total}</b>
    </div>
  );
};

export default Cart;
