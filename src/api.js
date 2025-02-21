import axios from "axios";
import { handleErrors } from "./utils/handleErrors";
const baseURL = axios.create({ baseURL: "https://htpncnews.onrender.com/api" });

const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
const pexelsURL = axios.create({
  baseURL: "https://api.pexels.com/v1/photos/",
  headers: { Authorization: apiKey },
});

export function fetchArticles(queries) {
  return baseURL
    .get("/articles", { params: queries })
    .then((response) => response.data.articles)
    .catch((error) => {
      return handleErrors(error);
    });
}

export function fetchCategories() {
  return baseURL
    .get("/topics")
    .then((response) => response.data.topics)
    .catch((error) => {
      return handleErrors(error);
    });
}

export function fetchPhotoData(photoURL) {
  const regex = /(?<=photos\/)\d+/;
  const photo_id = photoURL.match(regex)[0];
  return pexelsURL
    .get(photo_id)
    .then((response) => {
      return {
        alt: response.data.alt,
        photo_url: response.data.url,
        src: response.data.src,
        photographer: response.data.photographer,
        photographer_url: response.data.photographer_url,
      };
    })
    .catch((error) => {
      return handleErrors(error);
    });
}

export function fetchSingleArticle(article_id) {
  return baseURL
    .get("/articles/" + article_id)
    .then((response) => response.data.article)
    .catch((error) => {
      return handleErrors(error);
    });
}

export function fetchComments(article_id) {
  return baseURL
    .get("/articles/" + article_id + "/comments")
    .then((response) => response.data.comments);
}

export function fetchUserInfo(username) {
  return baseURL
    .get("/users/" + username)
    .then((response) => response.data.user)
    .catch((error) => {
      return handleErrors(error);
    });
}

export function patchVote(endpoint, id, positive) {
  const vote = positive ? 1 : -1;
  return baseURL
    .patch(`/${endpoint}/${id}`, { inc_votes: vote })
    .then((response) => response.data.comment)
    .catch((error) => {
      return handleErrors(error);
    });
}

export function postComment(article_id, author, body) {
  return baseURL
    .post("/articles/" + article_id + "/comments", { body, author })
    .catch((error) => {
      return handleErrors(error);
    });
}

export function deleteComment(comment_id) {
  return baseURL.delete("/comments/" + comment_id).catch((error) => {
    return handleErrors(error);
  });
}
