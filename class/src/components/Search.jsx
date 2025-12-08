import React, { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("pizza");
  return (
    <>
      <input
        type="text "
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
    </>
  );
};

export default Search;
