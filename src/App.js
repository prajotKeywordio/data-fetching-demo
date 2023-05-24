import React from "react";
import { BrowserRouter } from "react-router-dom";
import { OpenRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <OpenRoutes />
    </BrowserRouter>
  );
}

export default App;
