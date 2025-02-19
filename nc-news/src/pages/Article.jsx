import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { fetchSingleArticle } from "../api";
import Header from "../components/article/Header";
import Banner from "../components/article/Banner";
import ArticlesGrid from "../components/ArticlesGrid";
import CommentsList from "../components/CommentsList";

export default function Article() {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    fetchSingleArticle(article_id)
      .then((article) => {
        setArticle(article);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.response.data);
        setLoading(false);
      });
  }, [article_id]);
  if (loading) return "...Loading";
  if (error) return error.msg;
  return (
    <>
      <Header
        author={article.author}
        created_at={article.created_at}
        title={article.title}
      />
      <Banner
        url={article.article_img_url}
        alt_text={article.article_img_alt_text}
      />
      <article className="whitespace-pre-wrap">{article.body}</article>
      <hr className="border-primary-100 my-10" />
      <CommentsList article_id={article_id} />
      <hr className="border-primary-100 my-10" />
      <h2 className="text-3xl mb-3 capitalize">
        More articles about {article.topic}
      </h2>
      <ArticlesGrid
        article_id={article_id}
        category={article.topic}
        limit="6"
        showCategories={false}
      ></ArticlesGrid>
    </>
  );
}
