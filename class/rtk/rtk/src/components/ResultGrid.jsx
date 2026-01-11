import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIFs } from "../api/mediaApi";
import {
  // setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/featurs/searchSlice";
import { useEffect } from "react";
import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();
  useEffect(
    function () {
      // if(!query) return <h1></h1>
      const getData = async () => {
        try {
          dispatch(setLoading());
          //   let data ;
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhotos(query);
            // data = response.results;
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
            }));
          }
          if (activeTab == "videos") {
            let response = await fetchVideos(query);
            data = response.videos.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
            }));
          }
          if (activeTab == "gif") {
            let response = await fetchGIFs(query);
            console.log("gif", response);
            
            data = response.map((item) => ({
              id: item.id,
              type: "gif",
              title: item.title || "GIF",
              thumbnail: item.url,
              src: item.images["original"].url,
            }));
          }
          console.log(data);
          dispatch(setResults(data));
        } catch (error) {
          dispatch(setError(error.message));
        }
      };
      getData();
    },
    [query, activeTab]
  );

  if (error) return <h1>error</h1>;
  if (loading) return <h1>loading....</h1>;

  return (
    <div className="grid grid-cols-5 gap-2" >
      {results.map((item, index) => {
        return (
          <div key={index} className="col-span-1">
            <ResultCard item={item} activeTab={activeTab}/>
          </div>
        );
      })}
    </div>
  );
};

export default ResultGrid;
