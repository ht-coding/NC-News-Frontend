import { useNavigate, useParams } from "react-router";
import ArticlesGrid from "../components/ArticlesGrid";
import { useEffect } from "react";

export default function Browse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { category } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <ArticlesGrid limit="0" category={category}></ArticlesGrid>
      <p className="text-center my-5">
        <a
          className="text-primary-900 bg-primary-300 hover:bg-primary-500 hover:text-primary-50 px-5 py-1 rounded-2xl mx-auto cursor-pointer"
          to="/"
          onClick={() => {
            navigate(-1);
          }}
        >
          Go back
        </a>
      </p>
    </>
  );
}
