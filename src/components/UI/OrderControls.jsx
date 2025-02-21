import {
  SortAscending as SortDescending,
  SortDescending as SortAscending,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function OrderControls({ setGridDescending, setGridSort }) {
  const [descending, setDescending] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [sortBy, setSortBy] = useState(
    searchParams.get("sort_by") ?? "created_at"
  );
  console.log(searchParams);
  useEffect(() => {
    if (sortBy) {
      setSearchParams({ sort_by: sortBy, order: descending ? "desc" : "asc" });
      setGridDescending(descending);
      setGridSort(sortBy);
    }
  }, [sortBy, descending]);
  return (
    <section className="flex ms-auto gap-1">
      <span>Sort by:</span>
      <select
        className="bg-primary-100 p-1 rounded"
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
      >
        <option value={"title"}>Title</option>
        <option value={"topic"}>Topic</option>
        <option value={"author"}>Author</option>
        <option value={"created_at"}>Date</option>
        <option value={"votes"}>Votes</option>
        <option value={"comment_count"}>Comments</option>
      </select>
      <button
        onClick={() => {
          setDescending(!descending);
        }}
        className="text-2xl"
      >
        {descending ? <SortDescending /> : <SortAscending />}
        <span className="sr-only">
          {descending ? "descending" : "ascending"}
        </span>
      </button>
    </section>
  );
}
