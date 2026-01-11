import { useContext, useState } from "react";
import assets from "../assets/assets";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const navItems = ["Home", "Menu", "Contact Us", "Mobile App"];
  const [active, setActive] = useState("Home");
  const { cartItems } = useContext(StoreContext);
  return (
    <>
      <nav className="py-4  bg-white shadow-md">
        <div className="w-7xl mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={assets.logo} alt="Logo" />
          </Link>
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
            <Link to="/cart">
              <div className="relative">
                <img src={assets.basket_icon} alt="basket icon" />
                {Object.keys(cartItems).length > 0 && (
                  <span className="absolute w-5 flex justify-center items-center h-5 -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                    {Object.keys(cartItems).length}
                  </span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
