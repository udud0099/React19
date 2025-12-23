import React, { useState } from "react";
import Box from "./Box";

const Board = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [isTurn, setIsTurn] = useState(true);
  const setIsWinner = isWinner(value);
  function setValuePaly(i) {
    if (value[i] || setIsWinner) return;
    const setNewValue = value.slice();
    setNewValue[i] = isTurn ? "X" : "O";
    setValue(setNewValue);
    setIsTurn(!isTurn);
    // return i;
  }

  console.log(value, setIsWinner, "test winner");

  return (
    <div className="flex flex-col gap-4">
      <h1>game is</h1>
      <div className="grid grid-cols-3">
        <Box value={value[0]} gamePlay={() => setValuePaly(0)} />
        <Box value={value[1]} gamePlay={() => setValuePaly(1)} />
        <Box value={value[2]} gamePlay={() => setValuePaly(2)} />
        <Box value={value[3]} gamePlay={() => setValuePaly(3)} />
        <Box value={value[4]} gamePlay={() => setValuePaly(4)} />
        <Box value={value[5]} gamePlay={() => setValuePaly(5)} />
        <Box value={value[6]} gamePlay={() => setValuePaly(6)} />
        <Box value={value[7]} gamePlay={() => setValuePaly(7)} />
        <Box value={value[8]} gamePlay={() => setValuePaly(8)} />
      </div>
      <button onClick={() => (setValue(Array(9).fill(null)), setIsTurn(true))}>
        {setIsWinner ? "New Game" : "reset Game"}
      </button>
    </div>
  );
};

export default Board;

function isWinner(value) {
  const winnPatten = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < winnPatten.length; i++) {
    const [a, b, c] = winnPatten[i];
    if (
      value[a] === value[b] &&
      value[a] === value[c] &&
      value[b] === value[c]
    ) {
      return value[a];
    }
  }
  return null;
}
