import axios from "axios";
const baseURL = axios.create({ baseURL: "https://htpncnews.onrender.com/api" });

export function fetchArticles(queries) {
  return baseURL.get("/articles", { params: queries }).then((response) => {
    return response.data.articles;
  });
}

export function fetchSingleArticle(article_id) {
  return baseURL.get("/articles/" + article_id).then((response) => {
    return response.data.article;
  });
}
