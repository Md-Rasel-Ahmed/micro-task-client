import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Layouts/Main.jsx";
import Router from "./Routes/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Router></Router>
    </BrowserRouter>
  </StrictMode>,
);
