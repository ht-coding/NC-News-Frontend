import {
  SortAscending as SortDescending,
  SortDescending as SortAscending,
  LineVertical,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function OrderControls() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [descending, setDescending] = useState(
    searchParams.get("order") ? searchParams.get("order") === "desc" : true
  );
  const [sortBy, setSortBy] = useState(
    searchParams.get("sort_by") ?? "created_at"
  );
  useEffect(() => {
    if (sortBy) {
      setSearchParams({ sort_by: sortBy, order: descending ? "desc" : "asc" });
    }
  }, [sortBy, descending]);
  return (
    <section className="flex gap-1">
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
      <LineVertical className="my-auto hidden sm:block lg:hidden" />
    </section>
  );
}
