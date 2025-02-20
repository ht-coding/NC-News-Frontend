import { useContext, useEffect, useState } from "react";
import { Link, Pencil, Trash } from "@phosphor-icons/react";
import { fetchUserInfo } from "../../api";
import { Vote } from "../Vote";
import { UserContext } from "../../contexts/CurrentUser";
import ConfirmPopup from "../popups/ConfirmPopup";
import SingleDummyComment from "./SingleDummyComment";

export default function Comment({ commentData }) {
  const { user } = useContext(UserContext);
  const { comment_id, body, author, votes, created_at } = commentData;
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(true);
  const [deleted, setDeleted] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showComment, setShowComment] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetchUserInfo(author).then((response) => {
      setUserData(response);
      setLoading(false);
    });
  }, []);
  if (deleted) return <></>;
  if (loading) return <SingleDummyComment />;
  return (
    <>
      <article
        className={"my-5 " + (showComment ? "" : "hidden")}
        id={"comment-" + comment_id}
      >
        <header className="flex gap-2 relative justify-center">
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
          <Vote
            id={comment_id}
            votes={votes}
            voteType={"comment"}
            author={author}
          />
        </header>
        <p className="whitespace-pre-wrap bg-primary-100 rounded-3xl p-5 mt-3 flex flex-col">
          {body}
          {user === author && (
            <span className="flex gap-1 text-secondary-600 ms-auto mt-2 -mb-3 text-2xl">
              <Trash
                className="cursor-pointer hover:text-primary-900 hover:bg-primary-200 rounded-full p-1"
                title="Delete Comment"
                onClick={() => {
                  setShowConfirm(true);
                }}
              />
              <Pencil
                className="cursor-pointer hover:text-primary-900 hover:bg-primary-200 rounded-full p-1 opacity-50 pointer-events-none"
                title="Edit Comment"
              />
            </span>
          )}
        </p>
      </article>
      {showConfirm && (
        <ConfirmPopup
          comment_id={comment_id}
          setShowComment={setShowComment}
          setShowConfirm={setShowConfirm}
          setDeleted={setDeleted}
        />
      )}
    </>
  );
}
