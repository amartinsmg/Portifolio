import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UnitConverter from "./pages/UnitConverter";
import "./sass/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/UnitConverter" element={<UnitConverter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
