import React from "react";

import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import { NumberProvider } from "./Context/valueContext";

function App() {
  return (
    <NumberProvider>
      <Calculator />
    </NumberProvider>
  );
}

export default App;
