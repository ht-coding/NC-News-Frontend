import { CaretCircleDown, CaretCircleUp } from "@phosphor-icons/react";
import { useState } from "react";
import SortAndFilterControls from "./SortAndFilterControls";

export default function StickyCollapseBar({
  category,
  setGridSort,
  setGridDescending,
}) {
  const [showBar, setShowBar] = useState(true);

  return (
    <menu
      className={
        "sticky top-0 -mt-5 z-50 flex items-center gap-1" +
        (showBar ? " py-5 bg-primary-50" : "absolute mt-0 h-0")
      }
    >
      {showBar ? (
        <SortAndFilterControls
          setGridSort={setGridSort}
          setGridDescending={setGridDescending}
          category={category}
        />
      ) : null}
      <button
        className={
          "-me-8 text-2xl text-primary-400 cursor-pointer hover:opacity-80" +
          (!showBar ? " pt-8 ms-auto" : "")
        }
        onClick={() => {
          setShowBar(!showBar);
        }}
      >
        {showBar ? (
          <CaretCircleUp weight="fill" />
        ) : (
          <CaretCircleDown weight="fill" />
        )}
        <span className="sr-only">Toggle Control Bar</span>
      </button>
    </menu>
  );
}
