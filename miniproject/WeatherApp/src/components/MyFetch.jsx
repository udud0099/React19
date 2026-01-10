import React, { useEffect, useState } from "react";

const MyFetch = () => {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("Kathmandu");
  const [sv, setSv] = useState("");

  const searchFun = () => {
    setSv(search);
  };

  useEffect(() => {
    // fetch call used to be here
    const data = fetch(
      //   "https://api.openweathermap.org/geo/1.0/direct?q=Kathmandu&appid=65a843b0e9abbefbcb58359a2af2db8f"
      // ` https://api.openweathermap.org/data/2.5/weather?q=${
      //   sv || "Kathmandu"
      // }&units=metric&appid=65a843b0e9abbefbcb58359a2af2db8f`
      ` https://api.openweathermap.org/data/2.5/weather?q=${
        sv || "Kathmandu"
      }&units=metric&appid=65a843b0e9abbefbcb58359a2af2db8f`
    )
      .then((response) => response.json())
      .then((data) => setRepos(data));
    console.log(data);
  }, [sv]);
  console.log(repos);

  return (
    <div>
      MyFetch MyFetch
      <br />
      <br />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-4 border border-amber-500 rounded-2xl"
      />
      <br />
      <button onClick={searchFun}>Search</button>
      <br />
      <h1>Today Weather is</h1>
      <h1>City : {repos.name}</h1>
      <h1>City : {repos.weather?.[0]?.description}</h1>
      <h1>weather : {repos.weather?.[0]?.main}</h1>
      <h1>Temp : {repos.main?.temp} C</h1>
      {/* <h1>weather : {repos.weather[0].description}</h1> */}
    </div>
  );
};

export default MyFetch;
