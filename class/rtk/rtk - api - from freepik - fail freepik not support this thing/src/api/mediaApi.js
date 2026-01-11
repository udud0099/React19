import axios from "axios";

const FREEPIK_KEY = import.meta.env.VITE_FREEPIK_KEY;

export async function fetchIcons(query, page = 1, per_page = 10) {
  const res = await axios.get("https://api.freepik.com/v1/icons", {
    params: { query, page, per_page },
    headers: {
      "x-freepik-api-key": FREEPIK_KEY,
    },
  });

  return res.data;
}
