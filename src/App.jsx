import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import Pages from "./pages";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Pages />
    </>
  );
}

export default App;
