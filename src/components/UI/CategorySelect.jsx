import { useContext } from "react";
import { Link } from "react-router";
import { CategoriesContext } from "../../contexts/Categories";

export default function CategorySelect() {
  const { categories } = useContext(CategoriesContext);
  return (
    <nav className="sticky top-0 bg-primary-50 py-5 -mt-5 z-50 flex items-center gap-1">
      <p className="text-lg">Categories:</p>
      {categories.map((category) => (
        <Link
          key={category.slug}
          className="inline-block bg-primary-200 hover:bg-primary-100 px-3 py-1 rounded"
          to={"./" + category.slug}
        >
          {category.slug}
        </Link>
      ))}
    </nav>
  );
}
