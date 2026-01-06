import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos, fetchVideos, fetchGIFs } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/featurs/searchSlice";
import { useEffect } from "react";

const ResultGrid = () => {
  const { query, activeTab, results, loading, error } = useSelector(
    (store) => store.search
  );

  useEffect(
    function () {
      const getData = async () => {
        let data;
        if (activeTab == "photos") {
          let response = await fetchPhotos(query);
          data = response.results;
        }
        if (activeTab == "videos") {
          let response = await fetchVideos(query);
          data = response.videos;
        }
        if (activeTab == "gif") {
          let response = await fetchGIFs(query);
          data = response;
        }
        console.log(data);
      };
      getData();
    },
    [query, activeTab]
  );

  return (
    <div>
      <button>get data</button>
    </div>
  );
};

export default ResultGrid;
