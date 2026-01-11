import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/featurs/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setQuery(text));
    // setText("");
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
          className="px-4 py-2 border-2 border-amber-400 rounded-md mr-4"
        />
        <button className="px-4 py-2 border-2 border-amber-400 rounded-md">search</button>
      </form>
      <br />
    </div>
  );
};

export default SearchBar;
