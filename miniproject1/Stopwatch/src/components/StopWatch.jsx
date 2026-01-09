import { Play, Refresh2 } from "iconsax-reactjs";
import React from "react";
import IconsStyle from "./IconsStyle";

const StopWatch = () => {
  return (
    <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
      <div className="w-120 bg-white   h-150 flex justify-between flex-col py-8 px-6 rounded-2xl shadow-xl">
        <div className="flex justify-end">
          {/* <Refresh2 size="32" color="#4a5565" className="cursor-pointer"/> */}
          <IconsStyle icon={Refresh2} />
        </div>
        <div className="w-full  aspect-square bg-amber-400 rounded-full mx-auto text-white flex justify-center items-center text-6xl">
          con
        </div>
        <div className="flex justify-center mt-4">
          <div className="w-14 h-14 rounded-full flex justify-center items-center shadow-xl  border-3 border-gray-50  ">
            <IconsStyle icon={Play} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
