import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/featurs/searchSlice";

const Tabs = () => {
  const tabs = ["photos", "GIFs", "video"];
  const dispatch = useDispatch();

  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div>
      {tabs.map((item, index) => {
        return (
          <button
            key={index}
            onClick={() => {
              dispatch(setActiveTabs(item));
            }}
            className={`${
              item == activeTab ? "bg-red-600  ": ""
            } px-4 py-2 rounded-2xl text-md text-white mr-3 cursor-pointer border-2 border-white `}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
