import React from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./pages/landingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <LandingPage />
    </BrowserRouter>
  );
}

export default App;
