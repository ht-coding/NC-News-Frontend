import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import SortAndFilterControls from "./SortAndFilterControls";

export default function StickyCollapseBar({
  category,
  setGridSort,
  setGridDescending,
  searchParams,
  setSearchParams,
}) {
  const [showBar, setShowBar] = useState(true);

  return (
    <menu
      className={
        "sticky top-0 -mt-3 z-50 flex items-center gap-1 bg-primary-50" +
        (showBar ? " pt-3 pb-4" : " pt-4 pb-3 px-1")
      }
    >
      {showBar ? (
        <SortAndFilterControls
          setGridSort={setGridSort}
          setGridDescending={setGridDescending}
          setSearchParams={setSearchParams}
          searchParams={searchParams}
          category={category}
        />
      ) : null}
      <button
        className={
          "-me-8 text-2xl text-primary-500 cursor-pointer" +
          (!showBar ? " ms-auto" : "")
        }
        onClick={() => {
          setShowBar(!showBar);
        }}
      >
        {showBar ? <X /> : <List />}
        <span className="sr-only">Toggle Control Bar</span>
      </button>
    </menu>
  );
}
