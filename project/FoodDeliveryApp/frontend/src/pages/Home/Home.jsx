import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero";
import ExploreMenu from "../../components/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay";

const Home = () => {
  const [catogory, setCatogory] = useState(JSON.parse(localStorage.getItem('IsCatogory')) || "All");

  useEffect(() => {
    localStorage.setItem('IsCatogory', JSON.stringify(catogory));
  }, [catogory, setCatogory]);
  return (
    <div className="w-7xl mx-auto flex gap-8 flex-col py-8">
      <Hero />
      <ExploreMenu catogory={catogory} setCatogory={setCatogory} />
      <FoodDisplay catogory={catogory} />
    </div>
  );
};

export default Home;
