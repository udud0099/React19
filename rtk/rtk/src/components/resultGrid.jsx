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
          data = response.videos.map((item)=>({
            id:item.id,
            type: "video",
            title: item.user.name || 'video',
            thumbnail: item.image,
            src: item.video_files[0].link,
          }))
        }
        if (activeTab == "gif") {
          let response = await fetchGIFs(query);
          data = response.map((item)=>({
            id:item.id,
            type: "gif",
            title: item.title || "GIF",
            thumbnail: item.url,
            src: item.url,
          }));
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
