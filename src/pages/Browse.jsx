import { Link } from "react-router";
import ArticlesGrid from "../components/ArticlesGrid";

export default function Browse() {
  return (
    <>
      <ArticlesGrid limit="36"></ArticlesGrid>
      <p className="text-center my-5">
        <Link
          className="text-primary-50 bg-primary-700 hover:bg-primary-800 px-5 py-3 rounded-2xl"
          to="/"
        >
          Return to index
        </Link>
      </p>
    </>
  );
}
