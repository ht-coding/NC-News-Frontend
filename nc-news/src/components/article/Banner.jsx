import { useEffect, useState } from "react";
import { fetchPhotoData } from "../../api";

export default function Banner({ url }) {
  const [photoData, setPhotoData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchPhotoData(url).then((response) => {
      setPhotoData(response);
      setLoading(false);
    });
  }, []);
  if (loading)
    return (
      <div className="bg-primary-100 aspect-2/1 md:aspect-3/1 lg:aspect-4/1 block rounded-3xl my-3"></div>
    );
  return (
    <figure>
      <picture className="overflow-clip aspect-2/1 md:aspect-3/1 lg:aspect-3.5/1 block rounded-t-3xl mt-3">
        <img
          src={url}
          className="object-cover w-full h-full"
          alt={photoData.alt}
        />
      </picture>
      <figcaption className="bg-primary-100 py-2 px-5 rounded-b-3xl">
        <a
          href={photoData.photo_url}
          target="_blank"
          className="text-secondary-700 hover:text-secondary-900"
        >
          Photo
        </a>{" "}
        by{" "}
        <a
          href={photoData.photographer_url}
          target="_blank"
          className="text-secondary-700 hover:text-secondary-900 font-bold"
        >
          <cite>{photoData.photographer}</cite>
        </a>
      </figcaption>
    </figure>
  );
}
