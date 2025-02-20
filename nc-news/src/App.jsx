import Article from "./pages/Article";
import Browse from "./pages/Browse";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router";
import NavBar from "./components/NavBar";

function App() {
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
          <Route path="/*" element={"Not found"} />
        </Routes>
      </main>
    </>
  );
}

export default App;
