import { XCircle } from "@phosphor-icons/react";

export default function SuccessPopup({
  message,
  setShowModal,
  setSuccess,
  setNewComment,
  dismissable = true,
}) {
  return (
    <div className="absolute bg-green-200 rounded-2xl p-5 z-50">
      {message}
      {dismissable ? (
        <XCircle
          weight="duotone"
          className="inline-block text-green-800 text-2xl ms-2 -me-2 hover:cursor-pointer hover:opacity-75"
          onClick={() => {
            setSuccess(null);
            setShowModal(false);
            setNewComment(true);
          }}
        />
      ) : null}
    </div>
  );
}
