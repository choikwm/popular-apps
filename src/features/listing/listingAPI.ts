import axios from "axios";

export const getTopFreeListing = async () => {
  const response = await axios.get(
    "https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json"
  );
  return response;
};

export const getSuggestions = async () => {
  const response = await axios.get(
    "https://itunes.apple.com/hk/rss/topgrossingapplications/limit=10/json"
  );
  return response;
};

// export async function getListing() {
//   const response = axios.get(
//     "https://itunes.apple.com/hk/rss/topfreeapplications/limit=100/json"
//   );
//   return response;
// }
