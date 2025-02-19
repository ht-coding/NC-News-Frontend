import { useEffect, useState } from "react";
import { ThumbsDown, ThumbsUp, XCircle } from "@phosphor-icons/react";
import { patchVote } from "../api";

export function Vote({ id, votes, voteType }) {
  const [vote, setVote] = useState(0);
  const [error, setError] = useState(null);
  useEffect(() => {
    if (error) setVote(0);
  }, [error]);
  return (
    <>
      <div className="ms-auto me-5 text-md my-auto cursor-default flex items-center">
        <span
          className={
            votes !== 0
              ? votes >= 0
                ? "text-green-700"
                : "text-red-700"
              : undefined
          }
        >
          {votes + vote}
        </span>
        <ThumbsUp
          onClick={() => {
            patchVote(voteType, id, !vote).catch((error) => {
              setError(error);
            });
            vote === 1 ? setVote(0) : setVote(1);
          }}
          className={
            "inline-block mx-1 text-lg hover:cursor-pointer hover:opacity-75 " +
            (vote === 1 ? "text-green-700" : undefined)
          }
          aria-label="upvote"
        />
        <ThumbsDown
          onClick={() => {
            patchVote(voteType, id, !!vote).catch((error) => {
              setError(error);
            });
            vote === -1 ? setVote(0) : setVote(-1);
          }}
          className={
            "inline-block text-lg hover:cursor-pointer hover:opacity-75 " +
            (vote === -1 ? "text-red-700" : undefined)
          }
          aria-label="downvote"
        />
      </div>
      {error ? (
        <div className="absolute bg-red-200 rounded-2xl p-5 z-10">
          There was an error and your vote failed. Try check your connection.
          <XCircle
            weight="duotone"
            className="inline-block text-red-800 text-2xl ms-2 -me-2 hover:cursor-pointer hover:opacity-75"
            onClick={() => {
              setError(null);
            }}
          />
        </div>
      ) : null}
    </>
  );
}
