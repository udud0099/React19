import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementby5,
  incrementbyAmount,
} from "./redux/featurs/counterSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);
  const [setAmt, setSetAmt] = useState(1);
  return (
    <>
      <div>
        <h1>{count}</h1>
        <br />
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          add
        </button>
        <br />
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          sub
        </button>
        <br />
        <button
          onClick={() => {
            dispatch(incrementby5());
          }}
        >
          add 5
        </button>
        <br />
        <button
          onClick={() => {
            dispatch(incrementbyAmount(Number(setAmt)));
          }}
        >
          change by
        </button>
        <br />
        <h1>set the amout inc or dec = {setAmt}</h1>
        <input
          type="number"
          value={setAmt}
          onChange={(e) => setSetAmt(e.target.value)}
        />
        <br /> <br /> <br />
        <button onClick={() => setSetAmt((per) => per + 1)}>
          inc set amout
        </button>
        <br /> <br /> <br />
        <button onClick={() => setSetAmt((per) => per - 1)}>
          dec set amout
        </button>
      </div>
    </>
  );
}

export default App;
