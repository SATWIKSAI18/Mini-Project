import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Keep BrowserRouter only here
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* ✅ BrowserRouter should be here */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
