import { useNavigate, useParams, useSearchParams } from "react-router";
import ArticlesGrid from "../components/articles/ArticlesGrid";
import { useEffect, useState } from "react";
import StickyCollapseBar from "../components/UI/StickyCollapseBar";
import CategoryDescription from "../components/CategoryDescription";

export default function Browse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { category } = useParams();
  const navigate = useNavigate();
  const [gridSort, setGridSort] = useState("created_at");
  const [gridDescending, setGridDescending] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {}, [searchParams]);
  return (
    <>
      <StickyCollapseBar
        setGridDescending={setGridDescending}
        setGridSort={setGridSort}
        setSearchParams={setSearchParams}
        searchParams={searchParams}
        category={category}
      />
      {category ? <CategoryDescription category={category} /> : null}
      <ArticlesGrid
        limit="0"
        category={category}
        sort_by={gridSort}
        descending={gridDescending}
      ></ArticlesGrid>
      <p className="text-center my-5">
        <a
          className="text-primary-900 bg-primary-300 hover:bg-primary-500 hover:text-primary-50 px-5 py-2 rounded-2xl mx-auto cursor-pointer"
          to="/"
          onClick={() => {
            navigate(-2);
          }}
        >
          Go back
        </a>
      </p>
    </>
  );
}
