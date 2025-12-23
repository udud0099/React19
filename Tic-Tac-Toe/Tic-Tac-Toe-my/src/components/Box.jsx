import React from "react";

const Box = ({ value, gamePlay }) => {
  return (
    <button
      className="h-12 w-12 border-2 border-white text-2xl text-white font-medium cursor-pointer"
      onClick={gamePlay}
    >
      {value}
    </button>
  );
};

export default Box;
