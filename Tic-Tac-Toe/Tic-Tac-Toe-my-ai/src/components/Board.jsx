import React, { useState } from "react";
import Box from "./Box";

const Board = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  const setSquares = (index) => {
    if (value[index] || hasWinner) return;
    const newSquares = value.slice();
    newSquares[index] = turn ? "X" : "O";
    setValue(newSquares);
    setTurn(!turn);
  };
  const hasWinner = winner(value);

  // console.log(value);
  // console.log(hasWinner, "test winner ", hasWinner && turn ? "O" : "X");

  return (
    <>
      <h1>
        {hasWinner
          ? `Winner: ${turn ? "O" : "X"}`
          : `Current Player: ${turn ? "X" : "O"}`}
      </h1>
      <div className="grid grid-cols-3  ">
        <Box value={value[0]} handleClick={() => setSquares(0)} />
        <Box value={value[1]} handleClick={() => setSquares(1)} />
        <Box value={value[2]} handleClick={() => setSquares(2)} />
        <Box value={value[3]} handleClick={() => setSquares(3)} />
        <Box value={value[4]} handleClick={() => setSquares(4)} />
        <Box value={value[5]} handleClick={() => setSquares(5)} />
        <Box value={value[6]} handleClick={() => setSquares(6)} />
        <Box value={value[7]} handleClick={() => setSquares(7)} />
        <Box value={value[8]} handleClick={() => setSquares(8)} />
      </div>
    </>
  );
};

export default Board;

const winner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return true;
    }
  }
  return null;
};
