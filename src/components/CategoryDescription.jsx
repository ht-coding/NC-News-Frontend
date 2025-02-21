import { useContext } from "react";
import { CategoriesContext } from "../contexts/Categories";

export default function CategoryDescription({ category }) {
  const { categories } = useContext(CategoriesContext);
  return (
    <div className="mb-5">
      <h1 className="text-3xl mb-5">Articles about {category}</h1>
      <p>{categories.find((topic) => topic.slug === category).description}</p>
    </div>
  );
}
