import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
