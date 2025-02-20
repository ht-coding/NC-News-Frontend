import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router";
import filterCurrent from "../utils/filterCurrent";
import setLabelColours from "../utils/setLabelColours";
import Label from "./Label";
import Loader from "./Loader";
import DummyGrid from "./DummyGrid";
import setPhotoData from "../utils/setPhotoData";

export default function ArticlesGrid({
  sort_by,
  order,
  showCategories = true,
  category,
  limit = 12,
  offset = 0,
  article_id,
}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setError(null);
    setLoading(true);
    fetchArticles({
      sort_by,
      order,
      topic: category,
      limit,
      offset,
    })
      .then((articles) => {
        return filterCurrent(
          articles,
          article_id,
          sort_by,
          order,
          category,
          limit,
          offset
        );
      })
      .then((articles) => {
        return Promise.all(setPhotoData(articles));
      })
      .then((articles) => {
        setLabelColours(articles);
        setArticles(articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  if (error) return <>Error.</>;

  if (loading) return <DummyGrid count={limit} />;
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {articles.map((article, i) => (
        <Link
          to={"/article/" + article.article_id}
          className="hover:opacity-90 duration-75"
          key={i}
        >
          <figure className="aspect-video overflow-clip rounded-2xl">
            <img
              className="h-full w-full"
              src={article.article_img_url}
              alt={article.alt ?? ""}
            />
          </figure>
          <p className="mt-3">
            {showCategories && (
              <Label category={article.topic} colour={article.colour}></Label>
            )}
            {article.title}
          </p>
        </Link>
      ))}
    </section>
  );
}
