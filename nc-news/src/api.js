import axios from "axios";
const baseURL = axios.create({ baseURL: "https://htpncnews.onrender.com/api" });

export default function fetchArticles(queries) {
  return baseURL.get("/articles", { params: queries }).then((response) => {
    return response.data.articles;
  });
}
