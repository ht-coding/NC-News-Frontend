import { fetchPhotoData } from "../api";

export default function setPhotoData(articles) {
  return articles.map((article) => {
    return fetchPhotoData(article.article_img_url).then((photoData) => {
      return { ...article, ...photoData };
    });
  });
}
