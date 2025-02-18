export default function Banner({ url, alt_text }) {
  return (
    <picture className="overflow-clip aspect-2/1 md:aspect-3/1 lg:aspect-4/1 block rounded-3xl my-3">
      <img
        src={url}
        className="object-cover w-full h-full"
        alt={alt_text ?? ""}
      />
    </picture>
  );
}
