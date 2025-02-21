import { useEffect, useState } from "react";
import { fetchArticles } from "../api";
import { Link } from "react-router";
import filterCurrent from "../utils/filterCurrent";
import setLabelColours from "../utils/setLabelColours";
import Label from "./Label";
import DummyGrid from "./DummyGrid";
import setPhotoData from "../utils/setPhotoData";

export default function ArticlesGrid({
  sort_by,
  order,
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
      limit: +limit === 0 ? 999 : limit,
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
  }, [category]);

  if (error && !category)
    return (
      <p>
        Couldn't load the articles. Check your internet connection and try again
      </p>
    );
  if (error && category)
    return (
      <div className="my-auto">
        <h1 className="text-3xl text-center">Error {error.status ?? "500"}</h1>
        <p className="text-center mt-5">
          {error.response
            ? error.response.data.msg
            : "There was a problem loading the page"}
        </p>
      </div>
    );

  if (loading) return <DummyGrid count={+limit === 0 ? 12 : limit} />;
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {articles.map((article, i) => (
        <div key={i}>
          <Link
            to={"/article/" + article.article_id}
            className="hover:opacity-90 duration-75"
          >
            <figure className="aspect-video overflow-clip rounded-2xl">
              <img
                className="h-full w-full"
                src={article.article_img_url}
                alt={article.alt ?? ""}
              />
            </figure>
          </Link>
          <p className="mt-3">
            {!category && (
              <Link
                to={"/browse/" + article.topic}
                className="hover:opacity-80"
              >
                <Label category={article.topic} colour={article.colour}></Label>
              </Link>
            )}
            <Link
              to={"/article/" + article.article_id}
              className="hover:text-secondary-900 duration-75"
            >
              {article.title}
            </Link>
          </p>
        </div>
      ))}
    </section>
  );
}
