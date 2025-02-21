export default function Label({ category, colour }) {
  return (
    <span
      className={`bg-${colour}-200 text-${colour}-900 border-${colour}-500 border-1 px-2 py-0.5 rounded-lg inline-block me-2`}
    >
      {category}
    </span>
  );
}
