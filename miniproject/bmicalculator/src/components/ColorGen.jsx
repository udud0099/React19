import React, { useEffect, useState } from "react";

const ColorGen = () => {
  const [col, setCol] = useState("");
  let colOpc = "abcdef0123456789";
  const genColor = () => {
    let tempCol = "#";
    for (let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * 16);
      tempCol += colOpc[num];
    } 
    return setCol(tempCol);
  };

  useEffect(() => {
    genColor();
  }, []);
  return (
    <div>
      <div
        className="block w-16 h-16 bg-amber-400 rounded-2xl"
        style={{ backgroundColor: col }}
      ></div>
      <br />
      <h1> {col}</h1>
      <button onClick={genColor}>Gen</button>
    </div>
  );
};

export default ColorGen;
