import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ catogory, setCatogory }) => {
  return (
    <div>
      <h1>ExploreMenu ExploreMenu</h1>
      <br />
      <div className="flex gap-5">
        {menu_list.map((menu, index) => (
          <div
            key={index}
            className="text-center"
            onClick={() =>
              setCatogory((per) =>
                per === menu.menu_name ? "All" : menu.menu_name
              )
            }
          >
            <img
              src={menu.menu_image}
              className={` w-20 h-20 object-cover rounded-full mb-2 cursor-pointer ${
                catogory === menu.menu_name
                  ? "border-2 p-3 border-blue-500"
                  : ""
              }`}
              alt={menu.menu_name}
            />
            <span>{menu.menu_name}</span>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
