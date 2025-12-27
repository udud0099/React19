import React from "react";
import { useSelector } from "react-redux";

const AddToCard = () => {
  const selector = useSelector((state) => state.cart.value);
  return (
    <div>
      AddToCard AddToCard
      <br />
      <br />
      <h1>{selector}</h1>
    </div>
  );
};

export default AddToCard;
