import { useState } from "react";
import { fetchUserInfo } from "../api";
import { Link, ThumbsDown, ThumbsUp } from "@phosphor-icons/react";

export default function Comment({ commentData }) {
  const { comment_id, body, author, votes, created_at } = commentData;
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);

  useState(() => {
    setLoading(true);
    fetchUserInfo(author).then((response) => {
      setUserData(response);
      setLoading(false);
    });
  }, []);
  if (loading) return "loading...";
  return (
    <article className="my-5" id={"comment-" + comment_id}>
      <header className="flex gap-2">
        <picture className="block aspect-square rounded-full overflow-clip h-15 bg-accent-50 border-3 border-primary-200">
          <img
            src={userData.avatar_url}
            alt={author + "'s avatar"}
            className="object-cover w-full h-full"
          />
        </picture>
        <div>
          <p className="text-2xl">{userData.name}</p>
          <a
            className="text-neutral-600 flex items-center gap-1"
            href={"#comment-" + comment_id}
          >
            <Link weight="bold" />
            {new Date(created_at).toLocaleDateString()}
          </a>
        </div>
        <div className="ms-auto me-5 text-md my-auto cursor-default flex items-center">
          <span
            className={
              votes !== 0 && (votes >= 0 ? "text-green-700" : "text-red-700")
            }
          >
            {votes}
          </span>
          <ThumbsUp className="inline-block mx-1 text-lg" aria-label="upvote" />
          <ThumbsDown className="inline-block text-lg" aria-label="downvote" />
        </div>
      </header>
      <p className="whitespace-pre-wrap bg-primary-100 rounded-3xl p-5 mt-3">
        {body}
      </p>
    </article>
  );
}
