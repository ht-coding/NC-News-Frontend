import Article from "./pages/Article";
import Browse from "./pages/Browse";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";
import { fetchCategories } from "./api";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "./contexts/Categories";

function App() {
  const { setCategories } = useContext(CategoriesContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchCategories().then((categories) => {
      setCategories(categories);
      setLoading(false);
    });
  }, []);
  if (loading) return null;
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
            element={
              <div className="my-auto">
                <h1 className="text-3xl text-center">Error 404</h1>
                <p className="my-5 text-center">Page does not exist</p>
              </div>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
