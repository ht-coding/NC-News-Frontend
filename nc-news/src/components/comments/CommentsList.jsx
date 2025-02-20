import { useEffect, useState } from "react";
import Comment from "./Comment";
import { fetchComments } from "../../api";
import CommentModal from "./CommentModal";
import Loader from "../Loader";
import DummyComments from "./DummyComments";

export default function CommentsList({ article_id }) {
  const [newComment, setNewComment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetchComments(article_id)
      .then((response) => {
        return setComments(response);
      })
      .then(() => {
        setLoading(false);
        setNewComment(null);
      });
  }, [newComment]);
  if (loading && comments.length === 0) return <DummyComments />;
  return (
    <>
      <div className="flex text-lg">
        <button
          className="text-primary-900 bg-secondary-300 hover:bg-secondary-200 cursor-pointer px-3 py-2 rounded-2xl border-0 mx-auto"
          onClick={() => {
            setShowModal(true);
          }}
        >
          Post A Comment
        </button>
      </div>
      {comments.length === 0 ? (
        <p className="text-center mt-10">
          No comments have been left on this article yet.
        </p>
      ) : (
        comments.map((comment) => (
          <Comment commentData={comment} key={comment.comment_id} />
        ))
      )}
      {showModal && (
        <CommentModal
          setShowModal={setShowModal}
          article_id={article_id}
          setNewComment={setNewComment}
        />
      )}
    </>
  );
}
