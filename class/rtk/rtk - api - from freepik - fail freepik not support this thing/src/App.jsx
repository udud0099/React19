import { useState } from "react";
import { fetchIcons } from "./api/mediaApi";

function App() {
  const [photos, setPhotos] = useState();

  const addphotos = async (r) => {
    setPhotos(await r);
  };

  console.log(photos);
  

  return (
    <>
      <h1 className="text-4xl text-red-900">hello</h1>

      <button onClick={() => addphotos(fetchIcons("dog"))}>p click</button>
    </>
  );
}

export default App;
