import React from "react";
import { fetchGIFs, fetchPhotos, fetchVideos } from "./api/mediaApi";

const App = () => {
  const [photos, setPhotos] = React.useState([]);

  const addphotos = async (r) => {
    setPhotos(await r);
  };
  // console.log(photos, "photos --t");

  return (
    <div>
      App App
      <br />
      <br />
      <br />
      <button onClick={() => addphotos(fetchPhotos("husky"))}>p click</button>
      <br />
      <button onClick={() => addphotos(fetchVideos("husky"))}>v click</button>
      <br />
      <button onClick={() => addphotos(fetchGIFs("husky"))}>gif click</button>
      <br />
      {/* <div>
        {photos &&
          photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.urls.full}
              alt={photo.alt_description}
            />
          ))}
      </div> */}
      <div>
        {photos &&
          photos.map((photo) => (
            <img
              key={photo.id}
              src={photo.images.fixed_height.url}
              alt={photo.title}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
