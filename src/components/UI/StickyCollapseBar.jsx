import CategorySelect from "./CategorySelect";

export default function StickyCollapseBar({ category }) {
  if (!!category) return null;
  return <CategorySelect />;
}
