import Article from "./pages/Article";
import Browse from "./pages/Browse";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import { fetchCategories } from "./api";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "./contexts/Categories";
import Loader from "./components/Loader";
import Error from "./components/Error";

function App() {
  const { setCategories } = useContext(CategoriesContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slowStart, setSlowStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlowStart(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, [loading]);
  useEffect(() => {
    fetchCategories()
      .then((categories) => {
        setCategories(categories);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
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
      <main className="rounded-2xl bg-primary-50 px-10 py-5 border-t-1 sm:border-t-0 border-primary-100 sm:mx-5 xl:mx-auto sm:mt-10 sm:mb-5 max-w-[1280px] min-h-100 flex flex-col">
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
      <main className="rounded-2xl bg-primary-50 px-10 py-5 border-t-1 sm:border-t-0 border-primary-100 sm:mx-5 xl:mx-auto sm:mt-10 sm:mb-5 max-w-[1280px] min-h-100 flex flex-col">
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
    </>
  );
}

export default App;
