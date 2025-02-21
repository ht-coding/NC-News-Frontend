import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import { UserProvider } from "./contexts/CurrentUser.jsx";
import { CategoriesProvider } from "./contexts/Categories.jsx";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <CategoriesProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CategoriesProvider>
  </UserProvider>
);
