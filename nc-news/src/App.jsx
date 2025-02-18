import Article from "./pages/Article";
import Browse from "./pages/Browse";
import Landing from "./pages/Landing";
import { Link, Route, Routes } from "react-router";
import { Books } from "@phosphor-icons/react";

function App() {
  return (
    <>
      <header>
        <nav className="bg-primary-50 p-5 text-xl">
          <Link
            className="flex items-center text-secondary-800 hover:text-primary-500"
            to="/"
          >
            <Books className="me-1 text-3xl" weight="fill" /> NC News
          </Link>
        </nav>
      </header>
      <main className="bg-primary-50 px-10 py-5 border-t-1 sm:border-t-0 border-primary-100 sm:mx-5 xl:mx-auto sm:mt-10 sm:mb-5 max-w-[1280px]">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/article/:article_id" element={<Article />} />
          <Route path="/*" element={"Not found"} />
        </Routes>
      </main>
    </>
  );
}

export default App;
