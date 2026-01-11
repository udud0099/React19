import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./redux/slice";

const Product = () => {
  const dispatch = useDispatch();
  return (
    <div>
      Product Product
      <br />
      <button onClick={() => dispatch(addItem(1))}>add to card</button>
    </div>
  );
};

export default Product;
