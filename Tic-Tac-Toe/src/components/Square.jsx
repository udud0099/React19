import React, { useState } from "react";

const Square = ({ tern, setTern }) => {
  const [value, setValue] = useState(null);
  const handleClick = () => {
    if (value !== null) return;
    {
      (value === null) & setValue(tern);
    }

    setTern(tern === "X" ? "O" : "X");
  };

  return (
    <button
      className="h-12 w-12  flex justify-center items-center cursor-pointer border border-gray-300 text-2xl font-semibold"
      onClick={handleClick}
    >
      {value}
    </button>
  );
};

export default Square;
