import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/featurs/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    setText("");
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>search</button>
      </form>
    </div>
  );
};

export default SearchBar;
