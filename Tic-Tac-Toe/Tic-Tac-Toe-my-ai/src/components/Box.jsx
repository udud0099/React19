import React from "react";

const Box = ({ value, handleClick }) => {
  return (
    <>
      <button
        className="w-12 h-12 flex items-center justify-center border-2 cursor-pointer border-white  text-2xl font-semibold"
        onClick={handleClick}
      >
        {value}
      </button>
    </>
  );
};

export default Box;
