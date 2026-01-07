import React from "react";
import { useState } from "react";

const NumberINcDec = () => {
  const [cou, setCou] = useState(0);
  const [by, setBy] = useState(1);
  return (
    <div>
      <div>
        <h1>now cou is : {cou}</h1>
        <div>
          <button onClick={() => setCou((per) => per + 1)}>inc</button>
          <button onClick={() => setCou((per) => per - 1)}>dec</button>
          <button onClick={() => (setCou(0), setBy(1))}>reset</button>
        </div>
        <br />
        <div>
          <input
            type="number"
            value={by}
            onChange={(e) => setBy(e.target.value)}
          />
          <br />
          <button onClick={() => setCou(cou + by)}>inc by</button>
          <button onClick={() => setCou(cou - by)}>dec by</button>
          <h1>inc by now {by} </h1>

          <button onClick={() => setBy(by + 1)}>inc by inc</button>
          <button onClick={() => setBy(by - 1)}>dec by dec</button>
        </div>
      </div>
    </div>
  );
};

export default NumberINcDec;
