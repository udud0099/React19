import React, { useState } from "react";

const MultpleInput = () => {
  const [stu, setStu] = useState({
    name: "a",
    age: 0,
    ver: true,
  });
  return (
    <>
      <h1>
        {stu.name} age is {stu.age} and she is {stu.ver ? "Is V" : " Not a V"}
      </h1>
      <div>
        <br />
        <input
          type="text"
          value={stu.name}
          onChange={(e) => setStu({ ...stu, name: e.target.value })}
        />
        <input
          type="number"
          value={stu.age === 0 ? "" : stu.age}
          onChange={(e) => setStu({ ...stu, age: Number(e.target.value) })}
        />

        <div>
          <button onClick={(e) => setStu({ ...stu, ver: !stu.ver })}>
            she is {stu.ver ? "Is V" : " Not a V"}
          </button>
        </div>
      </div>
    </>
  );
};

export default MultpleInput;
