// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
 import { useState } from "react";
import "./App.css";

function App() {
  const [wei, setWei] = useState(0)
  const [hei, setHei] = useState(0)
  return (
    <>
      <h1 className="text-8xl text-green-700">BMI Calculator </h1>
    <div>
      <p>weight</p>
      <input type="number" className="border  border-black py-1 px-4 my-2" placeholder="weight" onChange={(e)=>setWei(e.target.value)} value={wei==0? null : wei} />
      <p>height</p>
      <input type="number" className="border border-black py-1 px-4 my-2" placeholder="height" onChange={(e)=>setHei(e.target.value)} value={hei==0? null : hei} />
    </div>

    <div>
      <h1>You BMI is <b>{wei/hei ? wei/hei : " - Plz Put you Weight and height"}</b> </h1>
      <p>you are 
        <b>
        { wei/hei > 40 ? " Obesity (Class 3 / Severe / Morbid)" : wei/hei > 35 ? " Obesity (Class 2)" :  wei/hei > 30 ? " Obesity (Class 1)" :  wei/hei > 25 ? " Overweight" :  wei/hei > 18.5 ? " Normal / Healthy Weight" : wei/hei > 0 ? " Underweight" :  "  - Plz Put you Weight and height"  }</b> 
      </p>
    </div>
       
      
    </>
  );
}

export default App;
