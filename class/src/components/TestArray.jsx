import React, { useState } from "react";

const TestArray = () => {
  const [arr, setArr] = useState([1, 2, 3, 4]);
  function incVal(i) {
    const newArr = [...arr]; // copy
    newArr[i] = newArr[i] + 1; // update
    setArr(newArr); // set
  }
  return (
    <div>
      {arr.map((t, i) => (
        <div key={i}>
          <h1 onClick={() => incVal(i)}>
            {t} - {i}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default TestArray;
