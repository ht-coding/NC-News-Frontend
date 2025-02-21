export default function Header({ author, title, created_at }) {
  return (
    <header>
      <h1 className="text-3xl">{title}</h1>
      <div className="flex justify-between text-neutral-600">
        <span>by {author}</span>
        <time>{new Date(created_at).toUTCString()}</time>
      </div>
    </header>
  );
}
