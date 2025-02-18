import { useEffect, useState } from "react";
import fetchArticles from "../api";
import { Link } from "react-router";

export default function ArticlesGrid({
  sort,
  order,
  showCategories,
  category,
  limit,
  offset,
}) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchArticles({
      sort_by: sort,
      order,
      topic: category,
      limit,
      offset,
    }).then((articles) => {
      articles.forEach((article) => {
        // bg-neutral-200 text-neutral-900 border-neutral-500
        let colour = "neutral";
        if (article.topic === "coding") {
          // bg-blue-200 text-blue-900 border-blue-500
          colour = "blue";
        } else if (article.topic === "football") {
          // bg-fuchsia-200 text-fuchsia-900 border-fuchsia-500
          colour = "fuchsia";
        } else if (article.topic === "cooking") {
          // bg-yellow-200 text-yellow-900  border-yellow-500
          colour = "yellow";
        }
        article.colour = colour;
      });
      setArticles(articles);
      setLoading(false);
    });
  }, []);
  console.log("hello");
  if (loading) return "loading...";
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {articles.map((article, i) => (
        <Link
          to={"/article/" + article.article_id}
          className="hover:opacity-90 duration-75"
        >
          <figure className="aspect-video overflow-clip rounded-2xl">
            <img className="h-full w-full" src={article.article_img_url} />
          </figure>
          <p key={i} className="mt-3">
            <span
              className={`bg-${article.colour}-200 text-${article.colour}-900 border-${article.colour}-500 border-1 px-2 py-0.5 rounded-lg inline-block me-2`}
            >
              {article.topic}
            </span>
            {article.title}
          </p>
        </Link>
      ))}
    </section>
  );
}
