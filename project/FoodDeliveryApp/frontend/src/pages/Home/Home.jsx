import React from "react";
import Hero from "../../components/Hero";
import ExploreMenu from "../../components/ExploreMenu";

const Home = () => {
  const [catogory, setCatogory] = React.useState("ALL");
  return (
    <div className="w-7xl mx-auto flex gap-8 flex-col py-8">
      <Hero />
      <ExploreMenu catogory={catogory} setCatogory={setCatogory} />
      Home Home
    </div>
  );
};

export default Home;
