import { Link } from "react-router";
import ArticlesGrid from "../components/ArticlesGrid";

export default function Landing() {
  return (
    <>
      <h2 className="text-3xl mb-3">Top Articles</h2>
      <ArticlesGrid sort_by="votes" limit="6"></ArticlesGrid>

      <h2 className="text-3xl mb-3 mt-10">Recent Articles</h2>
      <ArticlesGrid limit="6"></ArticlesGrid>
      <p className="text-center my-5">
        <Link
          className="text-primary-50 bg-primary-700 hover:bg-primary-800 px-5 py-3 rounded-2xl"
          to="/browse"
        >
          View all articles
        </Link>
      </p>
    </>
  );
}
