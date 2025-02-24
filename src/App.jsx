import Article from "./pages/Article";
import Browse from "./pages/Browse";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router";
import NavBar from "./components/UI/NavBar";
import { fetchCategories } from "./api";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "./contexts/Categories";
import Loader from "./components/UI/Loader";
import Error from "./components/Error";
import { GithubLogo, LineVertical } from "@phosphor-icons/react";
import NorthCoders from "./components/NorthCoders";

function App() {
  const { setCategories } = useContext(CategoriesContext);
  const [loading, setLoading] = useState(true);
  const [tries, setTries] = useState(0);
  const [error, setError] = useState(null);
  const [slowStart, setSlowStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlowStart(true);
      setTries(1);
    }, 3000);
    return () => clearTimeout(timer);
  }, [loading]);
  useEffect(() => {
    if (tries === 24) {
      setError({
        error: "Connection failed",
        msg: "Could not reach the database.",
      });
    }
    let interval;
    if (loading) {
      fetchCategories()
        .then((categories) => {
          setCategories(categories);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
      if (tries > 0) {
      }
      interval = setInterval(() => {
        setTries(tries + 1);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [tries]);
  if (error)
    return (
      <main className="rounded-2xl bg-primary-50 px-10 py-5 border-t-1 sm:border-t-0 border-primary-100 sm:mx-5 xl:mx-auto sm:mt-10 sm:mb-5 max-w-[1280px] min-h-100 flex flex-col">
        <div className="my-auto">
          <Error title={error.error} message={error.msg} />
        </div>
      </main>
    );
  if (loading)
    return (
      <main className="sm:rounded-2xl bg-primary-50 px-10 py-5 border-t-1 sm:border-t-0 border-primary-100 sm:mx-5 xl:mx-auto sm:mt-10 sm:mb-5 max-w-[1280px] min-h-100 flex flex-col">
        <div className="my-auto">
          <h1 className="text-3xl text-center mb-5 mt-5">Connecting...</h1>
          <Loader size={8}></Loader>
          <p
            className={
              "mx-auto max-w-200 transition duration-300 my-5 text-center" +
              (slowStart ? " opacity-100" : " opacity-0 invisible")
            }
          >
            This is taking a while. The server will spin down after 15 minutes
            of inactivity, so if your internet connection is working fine hang
            on a moment and the site will be online shortly!
          </p>
        </div>
      </main>
    );
  return (
    <>
      <header className="bg-primary-50 px-5 py-3 flex items-center relative">
        <NavBar />
      </header>
      <main className="sm:rounded-2xl bg-primary-50 px-10 py-5 border-t-1 sm:border-t-0 border-primary-100 sm:mx-5 xl:mx-auto sm:mt-10 sm:mb-5 max-w-[1280px] min-h-100 flex flex-col">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/browse/:category" element={<Browse />} />
          <Route path="/article/:article_id" element={<Article />} />
          <Route
            path="/*"
            element={<Error title="Not Found" message="Page does not exist" />}
          />
        </Routes>
      </main>
      <footer className="flex flex-col items-center max-w-[1280px] mx-auto text-primary-50 mb-3 gap-1">
        <p className="flex items-center">
          <GithubLogo className="bg-primary-50 text-primary-900 text-2xl me-2  aspect-square rounded-full p-1 inline" />
          <a
            href="https://github.com/captainharrie/NC-News-Frontend"
            className="hover:underline font-bold"
          >
            View Frontend Repository On GitHub
          </a>
          <GithubLogo className="bg-primary-50 text-primary-900 text-2xl mx-2  aspect-square rounded-full p-1 inline" />
          <a
            href="https://github.com/captainharrie/NC-News-Backend"
            className="hover:underline font-bold"
          >
            View Backend Repository On GitHub
          </a>
        </p>
        <p>
          <NorthCoders className="w-8 mx-3 aspect-square bg-primary-50 p-1 rounded-full inline align-middle" />
          This portfolio project was created as part of a Digital Skills
          Bootcamp in Software Engineering provided by{" "}
          <a
            href="https://northcoders.com/"
            className="hover:underline font-bold"
            target="_blank"
          >
            Northcoders
          </a>
          .
        </p>
      </footer>
    </>
  );
}

export default App;
