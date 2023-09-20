import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import LandingPage from "./pages/landingPage.jsx";
export default function App() {
  const id = "";
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<LandingPage />}></Route>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
