import { XCircle } from "@phosphor-icons/react";

export default function ErrorPopup({ message, setError }) {
  return (
    <div className="absolute bg-red-200 rounded-2xl p-5 z-50">
      {message}
      <XCircle
        weight="duotone"
        className="inline-block text-red-800 text-2xl ms-2 -me-2 hover:cursor-pointer hover:opacity-75"
        onClick={() => {
          setError(null);
        }}
      />
    </div>
  );
}
