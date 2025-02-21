import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { fetchSingleArticle } from "../api";
import Header from "../components/article/Header";
import Banner from "../components/article/Banner";
import ArticlesGrid from "../components/ArticlesGrid";
import CommentsList from "../components/comments/CommentsList";
import Divider from "../components/Divider";
import Stats from "../components/article/Stats";
import Loader from "../components/Loader";

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
      })
      .catch((error) => {
        setError(error.response.data);
        setLoading(false);
      });
  }, [article_id]);
  if (loading) return <Loader />;
  if (error) return error.msg;
  return (
    <>
      <Header
        author={article.author}
        created_at={article.created_at}
        title={article.title}
      />
      <Banner url={article.article_img_url} />
      <article className="whitespace-pre-wrap mt-5">{article.body}</article>
      <Stats
        article_id={article_id}
        votes={article.votes}
        author={article.author}
      />
      <Divider />
      <CommentsList article_id={article_id} />
      <Divider />
      <h2 className="text-3xl mb-3 capitalize">
        More articles about {article.topic}
      </h2>
      <ArticlesGrid
        article_id={article_id}
        category={article.topic}
        limit="6"
      ></ArticlesGrid>
      <Link
        className="text-primary-900 bg-primary-300 hover:bg-primary-500 hover:text-primary-50 px-5 py-2 rounded-2xl mx-auto mt-10 mb-5 capitalize"
        to={"/browse/" + article.topic}
      >
        View All {article.topic} Articles
      </Link>
    </>
  );
}
