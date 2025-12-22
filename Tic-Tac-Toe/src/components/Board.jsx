import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [tern, setTern] = useState("X");
  return (
    <div className="flex flex-col">
      <div className="flex">
        <Square value={tern} tern={tern} setTern={setTern} />
        <Square value={tern} tern={tern} setTern={setTern} />
        <Square value={tern} tern={tern} setTern={setTern} />
      </div>
      <div className="flex">
        <Square value={tern} tern={tern} setTern={setTern} />
        <Square value={tern} tern={tern} setTern={setTern} />
        <Square value={tern} tern={tern} setTern={setTern} />
      </div>
      <div className="flex">
        <Square value={tern} tern={tern} setTern={setTern} />
        <Square value={tern} tern={tern} setTern={setTern} />
        <Square value={tern} tern={tern} setTern={setTern} />
      </div>
    </div>
  );
};

export default Board;
