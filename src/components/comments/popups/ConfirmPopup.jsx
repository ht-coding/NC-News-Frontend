import { useEffect, useState } from "react";
import ErrorPopup from "./ErrorPopup";
import SuccessPopup from "./SuccessPopup";
import { deleteComment } from "../../../api";
import Loader from "../../UI/Loader";

export default function ConfirmPopup({
  comment_id,
  setShowConfirm,
  setShowComment,
  setDeleted,
}) {
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  function handleDeletion() {
    setShowComment(false);
    setDeleting(true);
    deleteComment(comment_id)
      .then(() => {
        setSuccess(true);
        setDeleted(true);
      })
      .catch(() => {
        setError(true);
        setShowComment(true);
      });
  }
  return (
    <div className="fixed w-screen h-screen top-0 left-0 z-50 flex items-center justify-center">
      <div
        className="bg-black opacity-40 w-full h-full"
        onClick={() => {
          if (!deleting) setShowConfirm(false);
        }}
      ></div>
      <dialog
        className={
          "z-50 bg-primary-50 p-5 m-auto rounded-2xl max-w-200 w-full" +
          (deleting ? " pointer-events-none" : "")
        }
        open={!success}
      >
        <p className="mb-3">
          Are you sure you want to delete this comment? This action cannot be
          undone.
        </p>
        <div className="flex flex-wrap gap-1 items-stretch">
          <button
            className={
              "text-red-900 bg-red-300 hover:bg-red-200 px-3 py-2 rounded-2xl border-0 cursor-pointer w-20" +
              (deleting ? " pointer-events-none opacity-50" : "")
            }
            onClick={handleDeletion}
          >
            {deleting ? (
              <Loader size={4} colour="red" label="Processing..." />
            ) : (
              "Delete"
            )}
          </button>
          <button
            className="text-primary-900 bg-primary-300 hover:bg-primary-200 px-3 py-2 rounded-2xl border-0 cursor-pointer"
            onClick={() => {
              if (!deleting) setShowConfirm(false);
            }}
          >
            Cancel
          </button>
        </div>
        {(error || success) && (
          <div className="absolute top-0 left-0 bg-black opacity-30 w-full h-full z-50 rounded-2xl"></div>
        )}
      </dialog>
      {error && (
        <ErrorPopup
          setError={setError}
          message={
            "Your comment could not be deleted. Check your internet connection and try again."
          }
        />
      )}

      {success && (
        <SuccessPopup
          setShowModal={setShowConfirm}
          setSuccess={setSuccess}
          message={"Your comment was successfully deleted."}
        />
      )}
    </div>
  );
}
