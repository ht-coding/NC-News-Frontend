import { useEffect, useState } from "react";
import { fetchArticles } from "../../api";
import { Link, useSearchParams } from "react-router";
import filterCurrent from "../../utils/filterCurrent";
import setLabelColours from "../../utils/setLabelColours";
import Label from "../Label";
import DummyGrid from "../DummyGrid";
import setPhotoData from "../../utils/setPhotoData";
import Error from "../Error";

export default function ArticlesGrid({
  forced_sort_by = "created_at",
  forced_order = "desc",
  category,
  limit = 12,
  offset = 0,
  article_id,
}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  useEffect(() => {
    setError(null);
    setLoading(true);
    const sort_by = searchParams.get("sort_by") ?? forced_sort_by;
    const order = searchParams.get("order") ?? forced_order;
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
        setLoading(false);
      });
  }, [category, searchParams]);

  if (error) return <Error title={error.error} message={error.msg} />;
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
                src={
                  article.src.original +
                  "?auto=compress&cs=tinysrgb&fit=crop&h=350&w=600"
                }
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
