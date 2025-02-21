import { Link } from "react-router";
import ArticlesGrid from "../components/articles/ArticlesGrid";
import Divider from "../components/Divider";

export default function Landing() {
  return (
    <>
      <section>
        <h1 className="text-3xl mb-3">Top Articles</h1>
        <ArticlesGrid sort_by="votes" limit="6"></ArticlesGrid>
      </section>
      <Divider />
      <section>
        <h1 className="text-3xl mb-3">Recent Articles</h1>
        <ArticlesGrid limit="6"></ArticlesGrid>
      </section>
      <Divider />
      <p className="text-center mb-5">
        <Link
          className="text-primary-900 bg-primary-300 hover:bg-primary-500 hover:text-primary-50 px-5 py-3 rounded-2xl mx-auto"
          to="/browse"
        >
          View all articles
        </Link>
      </p>
    </>
  );
}
