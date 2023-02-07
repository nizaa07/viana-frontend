import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home";

function Pages() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default Pages;
