import { fetchArticles } from "../api";

export default async function filterCurrent(
  articles,
  article_id,
  sort_by,
  order,
  category,
  limit,
  offset
) {
  try {
    let hadArticle = false;
    const filteredArticles = articles.filter((article) => {
      if (article.article_id === +article_id) {
        hadArticle = true;
      }
      return article.article_id !== +article_id;
    });

    if (hadArticle) {
      const newArticle = await fetchArticles({
        sort_by,
        order,
        topic: category,
        limit: 1,
        offset: +limit + +offset + 1,
      });
      filteredArticles.push(newArticle[0]);
    }
    return filteredArticles;
  } catch (error) {
    Promise.reject(error);
  }
}
