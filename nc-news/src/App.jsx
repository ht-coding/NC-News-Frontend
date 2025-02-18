import Browse from "./pages/Browse";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router";

function App() {
  return (
    <main className="bg-primary-50 px-10 py-5 mx-auto my-5 max-w-[1200px]">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/*" element={"Not found"} />
      </Routes>
    </main>
  );
}

export default App;
