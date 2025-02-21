import { useContext, useEffect, useState } from "react";
import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react";
import { patchVote } from "../api";
import { UserContext } from "../contexts/CurrentUser";
import ErrorPopup from "./popups/ErrorPopup";

export function Vote({ id, votes, voteType, author }) {
  const [vote, setVote] = useState(0);
  const [error, setError] = useState(null);
  const [canVote, setCanVote] = useState(false);
  const { user } = useContext(UserContext);
  useEffect(() => {
    if (error) setVote(0);
    if (user !== author) setCanVote(true);
  }, [error]);
  return (
    <>
      <section className="ms-auto mt-auto mb-0 me-5 text-md my-auto cursor-default flex items-center">
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
            if (canVote) {
              patchVote(voteType, id, !vote).catch((error) => {
                setError(error);
              });
              vote === 1 ? setVote(0) : setVote(1);
            }
          }}
          className={
            "inline-block mx-1 text-lg " +
            (vote === 1 ? "text-green-700 " : "") +
            (canVote
              ? "hover:cursor-pointer hover:opacity-75"
              : "pointer-events-none opacity-50")
          }
          aria-label="upvote"
        />
        <ThumbsDown
          onClick={() => {
            if (canVote) {
              patchVote(voteType, id, !!vote).catch((error) => {
                setError(error);
              });
              vote === -1 ? setVote(0) : setVote(-1);
            }
          }}
          className={
            "inline-block text-lg " +
            (vote === -1 ? "text-red-700 " : "") +
            (canVote
              ? "hover:cursor-pointer hover:opacity-75"
              : "pointer-events-none opacity-50")
          }
          aria-label="downvote"
        />
      </section>
      {error ? (
        <ErrorPopup
          setError={setError}
          message="There was an error and your vote failed. Try check your connection."
        />
      ) : null}
    </>
  );
}
