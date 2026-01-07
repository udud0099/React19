import { useState } from "react";

const MyTry2 = () => {
  const [wei, setWei] = useState(0);
  const [hei, setHei] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [mess, setMess] = useState("");
  const submitForm = () => {
    if (!wei || !hei) return setMess("Plz put wei and hei");
    setBmi(wei / hei);
  };
  const resetForm = () => {
    setHei(0);
    setBmi(0);
    setWei(0);
    setMess("");
  };

  return (
    <div className="mx-auto w-[25%] py-8 px-4 border border-gray-900 rounded-2xl my-8">
      {/* <h1 className="text-8xl text-green-700">BMI Calculator </h1> */}
      <div>
        <p>weight22</p>
        <input
          type="number"
          className="border  border-black py-1 px-4 my-2 w-full rounded-md"
          placeholder="weight"
          onChange={(e) => (setWei(e.target.value), setBmi(0))}
          value={wei == 0 ? null : wei}
        />
        <p>height</p>
        <input
          type="number"
          className="border border-black py-1 px-4 my-2 w-full rounded-md"
          placeholder="height"
          onChange={(e) => (setHei(e.target.value), setBmi(0))}
          value={hei == 0 ? null : hei}
        />
      </div>
      <div>
        <button
          onClick={submitForm}
          className="block px-4 py-2 border-r-gray-900 text-gray-900 rounded-xl w-full my-2 cursor-pointer border"
        >
          Submit
        </button>
        <button
          onClick={() => resetForm()}
          className="block px-4 py-2 border-r-gray-900 text-gray-900 rounded-xl w-full my-2 cursor-pointer border"
        >
          Reset
        </button>
      </div>
      <div>
        {!hei || !wei ? mess : ""}

        {!!bmi && <h1>Your BMI is : {bmi}</h1>}
      </div>
    </div>
  );
};

export default MyTry2;
