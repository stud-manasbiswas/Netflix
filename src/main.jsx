import { StrictMode } from "react";
import { createRoot } from "react-dom/client";  // ✅ Correct import
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root"));  // ✅ Correct usage
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
