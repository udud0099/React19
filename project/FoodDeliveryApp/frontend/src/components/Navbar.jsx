import { useState } from "react";
import assets from "../assets/assets";
const Navbar = () => {
  const navItems = ["Home", "Menu", "Contact Us", "Mobile App"];
  const [active, setActive] = useState("Home");
  return (
    <>
      <nav className="py-4  bg-white shadow-md">
        <div className="w-7xl mx-auto flex justify-between items-center">
          <img src={assets.logo} alt="Logo" />
          <div>
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li
                  key={item}
                  className={`text-gray-700 hover:text-gray-900 cursor-pointer ${
                    active === item ? "font-bold text-gray-900" : ""
                  }`}
                  onClick={() => setActive(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <img src={assets.search_icon} alt="search icon" />
            <div className="relative">
              <img src={assets.basket_icon} alt="basket icon" />
              <div>
                <span className="absolute w-5 flex justify-center items-center h-5 -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  3
                </span>
              </div>
            </div>
            <button className="px-5 py-2 rounded-full border border-red-500 cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
