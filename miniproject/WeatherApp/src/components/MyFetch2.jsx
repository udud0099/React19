import React, { useEffect, useState } from "react";

const MyFetch2 = () => {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("Kathmandu");

  const getData = () => {
    const data = fetch(
      ` https://api.openweathermap.org/data/2.5/weather?q=${
        search || "Kathmandu"
      }&units=metric&appid=65a843b0e9abbefbcb58359a2af2db8f`
    )
      .then((response) => response.json())
      .then((data) => setRepos(data));
    console.log(data);
  };
  useEffect(() => {
    // fetch call used to be here
    getData();
  }, []);
  const submitFun = () => {
    getData();
  };
  console.log(repos);

  return (
    <div>
      MyFetch MyFetch
      <br />
      <br />
      <form onSubmit={submitFun}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-4 border border-amber-500 rounded-2xl"
        />
        <button type="submit">sub</button>
      </form>
      <br />
      <br />
      <h1>Today Weather is</h1>
      <h1>City : {repos.name}</h1>
      <h1>City : {repos.weather?.[0]?.description}</h1>
      <h1>weather : {repos.weather?.[0]?.main}</h1>
      <h1>Temp : {repos.main?.temp} C</h1>
    </div>
  );
};

export default MyFetch2;
