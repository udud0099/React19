import React from "react";
import assets from "../assets/assets";

const MobileAppDownload = () => {
  return (
    <div className="flex flex-col justify-center items-center py-12 gap-6">
      <h1 className="font-semibold text-4xl  ">
        For Better Experience Download Tomato App
      </h1>
      <div className=" flex gap-4 flex-wrap cursor-pointer">
        <img src={assets.app_store} alt="" />
        <img src={assets.play_store} alt="" />
      </div>
    </div>
  );
};

export default MobileAppDownload;
