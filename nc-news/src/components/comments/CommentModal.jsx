import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/CurrentUser";
import { postComment } from "../../api";
import ErrorPopup from "../popups/ErrorPopup";
import SuccessPopup from "../popups/SuccessPopup";
import Loader from "../Loader";

export default function CommentModal({
  article_id,
  setShowModal,
  setNewComment,
}) {
  const { user } = useContext(UserContext);
  const [body, setBody] = useState(null);
  const [tempBody, setTempBody] = useState("");
  const [error, setError] = useState(null);
  const [posting, setPosting] = useState(false);
  const [success, setSuccess] = useState(null);
  useEffect(() => {
    if (body) {
      postComment(article_id, user, body).then(() => {
        setPosting(false);
        setSuccess(true);
      });
    }
  }, [body]);
  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-50 flex items-center justify-center">
      <div
        className="bg-black opacity-40 w-full h-full"
        onClick={() => {
          if (!posting) setShowModal(false);
        }}
      ></div>
      <dialog
        className={
          "z-50 bg-primary-50 p-5 m-auto rounded-2xl max-w-200 w-full" +
          (posting ? " pointer-events-none" : "")
        }
        open={!success}
      >
        <form>
          <label>
            <span className="text-xl block mb-3">Create comment</span>
            <textarea
              readOnly={posting}
              autoFocus
              className="bg-primary-100 p-3 rounded-2xl block mb-3 w-full h-50 min-h-30"
              placeholder="Write your comment here..."
              onChange={(event) => {
                setTempBody(event.target.value);
              }}
            ></textarea>
          </label>
          <div className="flex flex-wrap gap-1 items-stretch">
            <button
              className={
                "text-primary-900 bg-secondary-300 hover:bg-secondary-200 px-3 py-2 me-3 rounded-2xl border-0 cursor-pointer w-20" +
                (posting ? " pointer-events-none opacity-50" : "")
              }
              onClick={(event) => {
                event.preventDefault();
                if (tempBody.length < 15) {
                  setError({
                    message: "Comments must be at least 15 characters.",
                  });
                } else {
                  setPosting(true);
                  setBody(tempBody);
                }
              }}
            >
              {posting ? (
                <Loader size={4} colour="secondary" label="Processing..." />
              ) : (
                "Submit"
              )}
            </button>
            <button
              className="text-primary-900 bg-primary-300 hover:bg-primary-200 px-3 py-2 rounded-2xl border-0 cursor-pointer"
              onClick={(event) => {
                event.preventDefault();
                if (!posting) setShowModal(false);
              }}
            >
              Cancel
            </button>
          </div>
          {(error || success) && (
            <div className="absolute top-0 left-0 bg-black opacity-30 w-full h-full z-50 rounded-2xl"></div>
          )}
        </form>
      </dialog>
      {error && <ErrorPopup setError={setError} message={error.message} />}
      {success && (
        <SuccessPopup
          setShowModal={setShowModal}
          setSuccess={setSuccess}
          setNewComment={setNewComment}
          message={"Comment posted successfully!"}
        />
      )}
    </div>
  );
}
