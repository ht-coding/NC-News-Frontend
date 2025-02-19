import { useState } from "react";
import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react";
import { patchVote } from "../api";

export function Vote({ id, votes, voteType }) {
  const [vote, setVote] = useState(0);

  return (
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
          patchVote(voteType, id, true);
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
          patchVote(voteType, id, false);
          vote === -1 ? setVote(0) : setVote(-1);
        }}
        className={
          "inline-block text-lg hover:cursor-pointer hover:opacity-75 " +
          (vote === -1 ? "text-red-700" : undefined)
        }
        aria-label="downvote"
      />
    </div>
  );
}
