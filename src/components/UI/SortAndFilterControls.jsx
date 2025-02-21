import { Link } from "react-router";
import CategorySelect from "./CategorySelect";
import OrderControls from "./OrderControls";
import { ArrowLeft, LineVertical } from "@phosphor-icons/react";
export default function SortAndFilterControls({
  setGridSort,
  setGridDescending,
  category,
}) {
  return (
    <div className="flex flex-wrap gap-2 justify-between w-full">
      {!category ? (
        <CategorySelect />
      ) : (
        <Link
          className="inline-flex items-center gap-1 bg-primary-200 hover:bg-primary-100 px-3 py-1 rounded"
          to="/browse"
        >
          <ArrowLeft className="inline-block" /> All categories
        </Link>
      )}
      <OrderControls
        setGridSort={setGridSort}
        setGridDescending={setGridDescending}
      />
    </div>
  );
}
