import axios from "axios";

const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY;

export async function fetchPhotos(query, page = 1, per_page = 10) {
  const res = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query, page, per_page },
    headers: { Authorization: `Client-ID ${UNSPLASH_KEY}` },
  });
  return res.data;
  // return res.data.results;
}

export async function fetchVideos(query, page = 1, per_page = 10) {
  const res = await axios.get("https://api.pexels.com/videos/search", {
    params: { query, page, per_page },
    headers: { Authorization: PEXELS_KEY },
  });
  // return res.data.videos;
  return res.data;
}
export async function fetchGIFs(query, limit = 10) {
  const res = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { q: query, api_key: GIPHY_KEY, limit },
  });
  // return res;
  // return res.data;
    return res.data.data;
}
