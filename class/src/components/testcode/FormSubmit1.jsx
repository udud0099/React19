import React, { useState } from "react";

const FormSubmit1 = () => {
  const [name, setName] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
    
  }
  return (
    <div>
      <div>
        <h1>
          {name.fname} - {name.lname}
        </h1>
      </div>
      <form>
        <input
          type="text"
          value={name.fname}
          onChange={(e) => setName({ ...name, fname: e.target.value })}
        />
        <input
          type="text"
          value={name.lname}
          onChange={(e) => setName({ ...name, lname: e.target.value })}
        />
        <button onClick={(e) => handleSubmit(e)}>add</button>
      </form>
    </div>
  );
};

export default FormSubmit1;
