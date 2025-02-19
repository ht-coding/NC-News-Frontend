import { Books } from "@phosphor-icons/react";
import { Link } from "react-router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/CurrentUser";
import { fetchUserInfo } from "../api";

export default function NavBar() {
  const { user, setUser } = useContext(UserContext);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUserInfo(user).then((response) => {
      setUserData(response);
      setLoading(false);
    });
  });
  if (loading) return null;
  return (
    <>
      <nav className="text-xl">
        <Link
          className="flex items-center text-secondary-800 hover:text-primary-500"
          to="/"
        >
          <Books className="me-1 text-3xl" weight="fill" /> NC News
        </Link>
      </nav>
      <div className="ms-auto me-0 ">
        <details className="relative">
          <summary className="list-none" aria-label="User Menu">
            <picture className="block aspect-square rounded-full overflow-clip h-10 bg-accent-50 border-3 border-primary-200">
              <img
                src={userData.avatar_url}
                alt={"Your avatar"}
                className="object-cover w-full h-full"
              />
            </picture>
          </summary>
          <div className="absolute right-0 bg-primary-100 shadow p-3 rounded-2xl mt-5">
            <div class="bg-primary-100 clip-bottom h-3 w-3 absolute -top-2.5 right-3"></div>
            <ul>
              <li className="text-xl whitespace-nowrap">Hi {userData.name}!</li>
              <li className="opacity-60">@{userData.username}</li>
            </ul>
          </div>
        </details>
      </div>
    </>
  );
}
